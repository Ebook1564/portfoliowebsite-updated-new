import { NextResponse } from 'next/server';

const games = [
    {
        id: 1,
        name: "2048",
        category: "Puzzle",
        desc: "Join the numbers and get to the 2048 tile!",
        theme: "from-amber-400 to-orange-500",
        playUrl: "https://www.snappgames.com/games/2048",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2F2048.png&w=3840&q=75",
        rating: 4.8,
        playersOnline: 1240,
        isFeatured: true,
        isTrending: true
    },
    {
        id: 2,
        name: "Air Hockey",
        category: "Arcade",
        desc: "Classic air hockey battle against AI or friends.",
        theme: "from-blue-500 to-indigo-600",
        playUrl: "https://www.snappgames.com/games/airhockey",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fairhockey.png&w=3840&q=75",
        rating: 4.5,
        playersOnline: 850,
        isFeatured: false,
        isTrending: true
    },
    {
        id: 3,
        name: "Bee Jump",
        category: "Casual",
        desc: "Help the bee jump higher and avoid obstacles.",
        theme: "from-yellow-400 to-amber-500",
        playUrl: "https://www.snappgames.com/games/beejump",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fbeejump.png&w=3840&q=75",
        rating: 4.2,
        playersOnline: 620,
        isFeatured: false,
        isTrending: false
    },
    {
        id: 4,
        name: "Asteroids Crusher",
        category: "Strategy",
        desc: "Defend your base from incoming asteroids.",
        theme: "from-slate-600 to-slate-800",
        playUrl: "https://www.snappgames.com/games/asteroids-crusher",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fasteroids-crusher.png&w=3840&q=75",
        rating: 4.7,
        playersOnline: 1100,
        isFeatured: false,
        isTrending: true
    },
    {
        id: 5,
        name: "Bit Tank",
        category: "Strategy",
        desc: "Tactical tank warfare in a retro world.",
        theme: "from-emerald-600 to-teal-700",
        playUrl: "https://www.snappgames.com/games/bit-tank",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fbit-tank.png&w=3840&q=75",
        rating: 4.9,
        playersOnline: 2100,
        isFeatured: true,
        isTrending: false
    },
    {
        id: 6,
        name: "Candy Match 3",
        category: "Puzzle",
        desc: "Sweet match-3 puzzle adventure.",
        theme: "from-pink-500 to-rose-600",
        playUrl: "https://www.snappgames.com/games/candy-match3",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fcandy-match3.png&w=3840&q=75",
        rating: 4.4,
        playersOnline: 430,
        isFeatured: false,
        isTrending: false
    },
    {
        id: 7,
        name: "Cars Racing",
        category: "Racing",
        desc: "High-speed racing action on challenging tracks.",
        theme: "from-blue-600 to-blue-800",
        playUrl: "https://www.snappgames.com/games/cars-racing",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fcars-racing.png&w=3840&q=75",
        rating: 4.6,
        playersOnline: 1800,
        isFeatured: false,
        isTrending: true
    },
    {
        id: 8,
        name: "Domino",
        category: "Strategy",
        desc: "Classic dominoes game with multiple modes.",
        theme: "from-slate-700 to-slate-900",
        playUrl: "https://www.snappgames.com/games/domino",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fdomino.png&w=3840&q=75",
        rating: 4.3,
        playersOnline: 750,
        isFeatured: false,
        isTrending: false
    },
    {
        id: 9,
        name: "Jetpack Boy",
        category: "Arcade",
        desc: "Fly as far as you can with your jetpack.",
        theme: "from-sky-400 to-indigo-500",
        playUrl: "https://www.snappgames.com/games/jetpack-boy",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fjetpack-boy.png&w=3840&q=75",
        rating: 4.7,
        playersOnline: 920,
        isFeatured: false,
        isTrending: false
    },
    {
        id: 10,
        name: "Tower Builder",
        category: "Strategy",
        desc: "Build the tallest tower in the world.",
        theme: "from-amber-600 to-orange-700",
        playUrl: "https://www.snappgames.com/games/tower-builder",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Ftower-builder.png&w=3840&q=75",
        rating: 4.5,
        playersOnline: 580,
        isFeatured: false,
        isTrending: false
    },
    {
        id: 11,
        name: "Tic Tac Toe",
        category: "Puzzle",
        desc: "The classic game of X's and O's.",
        theme: "from-indigo-500 to-purple-600",
        playUrl: "https://www.snappgames.com/games/tic-tac-toe",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Ftic-tac-toe.png&w=3840&q=75",
        rating: 4.2,
        playersOnline: 310,
        isFeatured: false,
        isTrending: false
    },
    {
        id: 12,
        name: "Zombies Attack",
        category: "Action",
        desc: "Survive the zombie apocalypse.",
        theme: "from-red-600 to-red-800",
        playUrl: "https://www.snappgames.com/games/zombies-attack",
        thumbnail: "https://www.snappgames.com/_next/image?url=%2Fassets%2Fzombies-attack.png&w=3840&q=75",
        rating: 4.8,
        playersOnline: 1560,
        isFeatured: false,
        isTrending: true
    },
];

export async function GET() {
    return NextResponse.json(games);
}
