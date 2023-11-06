document.addEventListener("DOMContentLoaded", function () {
    // Array of possible headings
    const headings = [
        "You have a way of making even the quirkiest moments special.",
        "Your playfulness keeps life interesting, even when you're being a little troublemaker.",
        "Sometimes, your unpredictability is your charm.",
        "It's never a dull moment with you around, even when you're being a bit cheeky.",
        "Your beauty is both captivating and mysterious, just like you.",
        "You're an eloquent speaker, but you have a mischievous side that keeps me on my toes.",
        "Your intelligence is impressive, even if it sometimes leads to playful debates.",
        "You're like a puzzle I can't quite solve, and I love every piece of you.",
        "I'll admit, your witty banter can be both enchanting and exasperating.",
        "Your presence is like a rollercoaster ride, full of ups and downs, but always exciting.",
        "Your laughter is music to my ears, even when you're teasing me.",
        "You have a way of making ordinary moments extraordinary.",
        "There's something about your annoying habits that makes me smile.",
        "Your beauty is a work of art, with every quirk adding to its uniqueness.",
        "You're a master of words, but sometimes, your silence speaks volumes.",
        "You challenge me in the best way possible, even when you're being a little stubborn.",
        "You're a puzzle worth solving, and I'm determined to figure you out.",
        "Your intelligence is both a blessing and a curse, especially during our playful debates.",
        "Your enigmatic nature keeps me intrigued, and I wouldn't have it any other way.",
        "You light up the room with your presence, even when you're causing mischief.",
        "Your charming antics always keep me guessing.",
        "You have a unique way of turning everyday moments into memorable adventures.",
        "Your quirks and alluring beauty make you one of a kind.",
        "You're the master of eloquence, even when you're throwing in a teasing remark.",
        "Your sharp mind is something I admire, even when it leads to our playful spats.",
        "You're like a riddle I can't resist trying to solve.",
        "Your vibrant personality adds a touch of excitement to every moment.",
        "You have a way of making me smile, even when you're testing my patience.",
        "Your allure is undeniable, and your mystery is intriguing.",
        "You're a captivating paradox, and I'm enchanted by every aspect of you.",
        "Your clever comebacks always keep me on my toes.",
        "You bring a spark of excitement to my life, even in the most exasperating moments.",
        "Your presence is like a delightful puzzle that I'm determined to unravel.",
        "You make the ordinary extraordinary with your playful spirit.",
        "Your annoying habits are oddly endearing.",
        "Your beauty is a masterpiece with every imperfection making it even more fascinating.",
        "Your eloquence is matched only by your wit, making every conversation a delight.",
        "Your intelligence is both a challenge and a source of admiration in our playful debates.",
        "You're like a captivating enigma that I can't help but try to decipher.",
        "Your radiant personality brightens every room you enter, even when you're being mischievous.",
        "Your charming antics are part of what makes you so irresistible.",
        "You have a knack for turning the mundane into magical moments.",
        "Your quirks and your stunning beauty make you truly one of a kind.",
        "Your clever remarks add an extra layer of charm to your eloquence.",
        "Your sharp intellect is something I greatly appreciate, even during our spirited disagreements.",
        "You're like a captivating mystery that I'm determined to unravel.",
        "Your vivacious nature brings life to every gathering, even when you're being a bit vexing.",
        "Your presence is a puzzle I can't resist trying to solve.",
        "You have a way of making every day an exciting adventure, even in the most trying times.",
        "Your quirks are like pieces of a fascinating puzzle, and I'm enjoying every moment of putting it together."
      ];

    // Get a random heading
    const randomHeading = headings[Math.floor(Math.random() * headings.length)];

    // Set the heading on the page
    document.getElementById("heading").textContent = randomHeading;

    // Array of image file names
    const imageFiles = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
        "image19.jpg",
        "image20.jpg",
        "image21.jpg",
        "image22.jpg",
        "image23.jpg",
        "image24.jpg",
        "image25.jpg",
        "image26.jpg",
        "image27.jpg",
        "image28.jpg",
        "image29.jpg",
        "image30.jpg",
        "image31.jpg",
        "image32.jpg",
        "image33.jpg",
        "image34.jpg",
        "image35.jpg",
        "image36.jpg",
        "image37.jpg",
        "image38.jpg",
        "image39.jpg",
        "image40.jpg",
        "image41.jpg",
        "image42.jpg",
        "image43.jpg"
        // "image44.jpg",
        // "image45.jpg",
        // "image46.jpg",
        // "image47.jpg",
        // "image48.jpg",
        // "image49.jpg",
        // "image50.jpg"
      ];

    // Get a random image
    const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];

    // Set the image source
    document.getElementById("image").src = "img/" + randomImage;
});
