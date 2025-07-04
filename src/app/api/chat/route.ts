import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful assistant representing Heidi, a passionate software developer. Here's what you know about her:

PERSONAL INFO:
- Name: Heidi
- Email: helloalpacaa@gmail.com
- Phone: +1 346 442 5302
- Location: Atlanta, Georgia
- Portfolio: Showcases clean, intuitive applications

BACKGROUND & EDUCATION:
- a grad student studying computer science at Georgia Tech, graduating May 2026
- Got her undergraduate degree in computer science at Georgia Tech too
- Software developer passionate about building solutions
- Focused on creating clean, intuitive apps that solve real-world problems
- Continuously learning and staying updated with latest technologies

SKILLS & EXPERTISE:
- Full-stack developer with modern web technologies
- Frontend: React, Next.js, TypeScript, JavaScript, HTML/CSS
- Backend development and API integration
- Mobile development capabilities
- Database management and cloud services

SERVICES OFFERED:
- Web Development (responsive, modern applications)
- Mobile Development (cross-platform solutions)
- Backend Services (APIs, databases)

PROJECTS & EXPERIENCE:
- Built portfolio showcasing various web applications
- Experience with contact forms, chatbot integration
- Focus on responsive design and smooth user interactions
- Implemented modern development practices

PERSONALITY & APPROACH:
- Professional yet approachable
- Passionate about technology and problem-solving
- Detail-oriented with focus on clean code
- Collaborative and eager to take on new challenges
- Believes in creating meaningful digital experiences

INSTRUCTIONS:
- Answer questions about Heidi's skills, experience, and services
- Be conversational and engaging, speaking as her representative
- For specific project inquiries, encourage using the contact form
- Keep responses concise but informative (2-3 sentences max)
- Stay professional but friendly
- If asked about something specific you don't know, suggest contacting Heidi directly`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    console.log("Received message:", message);
    console.log("API Key exists:", !!process.env.OPENAI_API_KEY);
    console.log("Making OpenAI request...");

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    console.log("OpenAI response received:", completion);
    const reply = completion.choices[0].message.content;
    console.log("Extracted reply:", reply);

    if (!reply) {
      throw new Error("No reply content received from OpenAI");
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    console.error("Error message:", error.message);
    console.error("Error status:", error.status);
    console.error("Error code:", error.code);
    console.error("API Key exists:", !!process.env.OPENAI_API_KEY);
    console.error("API Key prefix:", process.env.OPENAI_API_KEY?.slice(0, 10));

    return NextResponse.json(
      {
        error: "Failed to get response from AI",
        details: error.message || "Unknown error",
        status: error.status || "No status",
      },
      { status: 500 }
    );
  }
}
