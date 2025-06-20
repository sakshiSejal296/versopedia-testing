const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /api/poems/today
const getPoemOfTheDay = async (req, res) => {
  const today = new Date().toISOString().split("T")[0]; // Just YYYY-MM-DD

  try {
    const poem = await prisma.poem.findFirst({
      where: {
        date: {
          equals: new Date(today),
        },
      },
    });

    if (!poem) {
      return res.status(404).json({ message: "No poem found for today." });
    }

    res.json(poem);
  } catch (error) {
    console.error("Error fetching today's poem:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getPoemOfTheDay,
};
