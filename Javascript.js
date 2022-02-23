function zodiac(day, month) {
    // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
    var zodiac = [
      "",
      "Capricorn",
      "Aquarius",
      "Pisces",
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
    ];
    var last_day = [
      "",
      19,
      18,
      20,
      20,
      21,
      21,
      22,
      22,
      21,
      22,
      21,
      20,
      19,
    ];
    return day > last_day[month] ? zodiac[month * 1 + 1] : zodiac[month];
  }
  document.getElementById("submit").onclick = function () {
    let result = (document.getElementById("result").innerHTML = zodiac(
      document.getElementById("days").value,
      document.getElementById("month").value
    ));
    if (result == "Aquarius") {
      document.getElementById("qualities").innerHTML = "A Born Leader!";
      document.getElementById("image").src = "zidimg/Aquarius.png";
      document.getElementById("more").innerHTML =
        " <h4>Your Personality:</h4> Its truly a sign ahead of the times, and Aquarians are always looking forward into the future with a cool, airy perspective. As such, they are sometimes labeled as the archetypal outsiders or eclectics of the zodiac.<strong> Aquarians are usually full of ideas, </strong> ready to get the big picture on a problem and figure out how we should all move forward collectively into the unknown. Aquarius says onward—into the future!. Their best matches are: (Libra, Scorpio, And Sagittarius) ";
    }
    if (result == "Pisces") {
      document.getElementById("qualities").innerHTML =
        "Whole Hearted Peoples!";
      document.getElementById("image").src = "zidimg/Pisces.png";
      document.getElementById("more").innerHTML =
        "<h4>Your Personality:</h4> Pisces people are known for being emotionally sensitive, gracious, and emotionally aware. Pisces characters are regarded for being among the most sympathetic of the zodiac signs, and they will go to great lengths to ensure the happiness of those around them. Pisces are sympathetic and sensitive to others' feelings. Their best matches are: (Scorpio, Cancer, And Pisces)";
    }
    if (result == "Aries") {
      document.getElementById("qualities").innerHTML =
        "A Confident Person!";
      document.getElementById("image").src = "zidimg/Aries.png";
      document.getElementById("more").innerHTML =
        " <h4>Your Personality:</h4>  Aries are spontaneous and courageous. They have a sense of adventure and love to explore. They're determined and bold, and are good at initiating new projects. They have high energy and can initiate quick actions. Like every other person, Aries people also have few of the negative traits in their personality. People with Aries zodiac gets easily angry even on small things. They are unable to limit their temperament easily and this drives them away from people. Their best matches: (Gemini, Leo, Sagittarius.)";
    }
    if (result == "Taurus") {
      document.getElementById("qualities").innerHTML =
        "A Strong desire keeper!";
      document.getElementById("image").src = "zidimg/Taurus.png";
      document.getElementById("more").innerHTML =
        " <h4>Your Personality:</h4> People born under the Taurus sign also value honesty above all else, so don't try to pull a fast one on them—they'll never forgive you if they find out you've deceived them. They  don't shy away from hard work and aren't afraid to do what it takes to get the job done. In other words, if there's a Taurus in your group for a class project, you're in great hands! In their professional lives, Taureans are patient, reliable, and very thorough. When given a specific task, they'll address it with laser-sharp focus until it's complete. Their best matches are: (Scorpio, Leo, Virgo) ";
    }
    if (result == "Gemini") {
      document.getElementById("qualities").innerHTML =
        "A Playful Person!";
      document.getElementById("image").src = "zidimg/Gemini.png";
      document.getElementById("more").innerHTML =
        "<h4>Your Personality:</h4> Geminis are easy-going and adjustable. They're willing to try anything at least once, so do not play truth or dare with them, you're going to lose. They'll be happy to go along with any plan and will likely plan some fun adventures. Your craziest stories will involve your Gemini friends. The reason Geminis always have interesting things to say is that they're highly intelligent. They're inquisitive, so they love to learn. You'll often find Geminis with a book in their hands. (Definitely ask your Gemini friends for book recommendations.) The flipside of Geminis' intelligence and curiosity is that they can be nosy. They want to know everything about everyone. It can be exciting when they encourage you to share your deepest secrets or when they're giving you the lowdown on everyone else, but be careful before telling your dirty little secrets to a Gemini—you never know who they might tell them to. Their best matches are: (Aries, Leo, and Sagittarius) ";
    }
    if (result == "Cancer") {
      document.getElementById("qualities").innerHTML =
        "Very Emotional Person!";
      document.getElementById("image").src = "zidimg/Cancer.png";
      document.getElementById("more").innerHTML =
        " <h4>Your Personality:</h4> Cancers attract friends and lovers through their loyalty, commitment, and emotional depth. They seek relationships that feel safe and secure and have lots of room for alone time, emotional processing, and cuddling. Cancer's intuitive nature really pays off in the bedroom. It can feel like your Cancer lover is reading your mind and anticipating your needs ahead of time. Remember—reciprocity is key. Cancers are known for their generous nature, but it's important that you match their level of care. They need to feel loved as much as they need to give love. Their best matches: (Scorpio, Pisces, Aquarius) ";
    }
    if (result == "Leo") {
      document.getElementById("qualities").innerHTML =
        "Attention Seeker!";
      document.getElementById("image").src = "zidimg/Leo.png";
      document.getElementById("more").innerHTML =
        " <h4>Your Personality:</h4> Leos are bold, warm, and loving. They are also the ultimate showmen. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. They have a way with words, and can speak eloquently on just about any topic, no matter how quickly they’ve just been introduced to it. Leos are naturally energetic and passionate and often fall for partners that are equally enthusiastic. They are attracted to the same qualities in others that they see in themselves. They like partners that are confident and proactive. Who will go after what they want without apology. Their best matches are: (Aries, Leo, Sagittarius) ";
    }
    if (result == "Virgo") {
      document.getElementById("qualities").innerHTML =
        "A Practical Person!";
      document.getElementById("image").src = "zidimg/Virgo.png";
      document.getElementById("more").innerHTML =
        " <h4>Your Personality:</h4> Virgos are known for being perfectionists. Clean freaks. They are known for their attention to detail. They can find patterns where there are none. They can be finicky and critical to a fault. Virgos are also known for being intelligent, but because of their introverted nature they can sometimes have trouble expressing themselves. Talking to them may feel like floating on the surface of existence, and like you never know what they’re thinking and feeling deep inside. Their best matches: (Scorpio, Capricorn, Taurus, Cancer) ";
    }
    if (result == "Libra") {
      document.getElementById("qualities").innerHTML =
        "The sign speaks itself!";
      document.getElementById("image").src = "zidimg/Libra.png";
      document.getElementById("more").innerHTML =
        "<h4>Your Personality:</h4> Librans are extroverted, cosy, and friendly people. Librans, like the Scales that symbolise the sign, are often concerned with attaining balance, harmony, peace, and justice in the world. with their wast stores of charm, intellegancen, frankness, persuasion, and seamless connectivity, they are well-equipped to do so. They might be a little too easy-going and laid-back at times. Indeed, they are typically dedicated workers and leaders in their areas. They excel in “peacekeeping” professions because they have the rare ability to percieve all side of an argument. The source of Libras’ anger is the tension between what they think life should be like and what it actually is like. They fantasize about success, influence, and power, but feel as though they have to work harder than other people to achieve it.  Their best matches are: (Aquarius, Capricorn, Scorpio, And pisces) ";
    }
    if (result == "Scorpio") {
      document.getElementById("qualities").innerHTML = "The King Of Sex!";
      document.getElementById("image").src = "zidimg/Scorpio.png";
      document.getElementById("more").innerHTML =
        "<h4>Your Personality:</h4>Their ability to understand other people’s emotions allows them to sense and respond to the shifts in your world, and come to your aid before you even know you need it. Scorpios are passionate and assertive people with determination and focus. you rarely see in other zodiac signs. They will move mountains for someone who they love, and they will drop all those mountains on their head if someone hurt them. They love to keep their loved one's secrets, <strong>They will take your SECRETS to their graves!</strong>  They will turn to in-depth research to reach the truth behind anything they find important. Great leaders and guides, Scorpios are resourceful, dedicated and fearless when there is challenge to be overcome. They will hold on to other people’s secrets, even when they aren’t very fond of them to begin with and do anything they can for those they tie themselves to. They are very emotional. They socialize from behind a double-sided mirror, always scanning, reading you while you can only see your own reflection. They prefer to be the people asking the questions. They remove your skin with their perceptive scalpel and take inventory of your pulsing viscera. They probe and push. They know the little things that make you tick. Your pressure points.  their best matches are: (Aquarius, Libra, Cancer, And Capricorn) ";
    }
    if (result == "Sagittarius") {
      document.getElementById("qualities").innerHTML = "You Love Change!";
      document.getElementById("image").src = "zidimg/Sagittarius.png";
      document.getElementById("more").innerHTML =
        "<h4>Your Personality:</h4> Sagittarius is the ultimate empiricist. They will always choose principles over feelings and will often question who they are. They move from job to job, philosophy to philosophy, belief to belief. They are explorers of the human condition and are unafraid of change. Sagittarians feel like the world is their playground. They love to explore the unknown. They want to understand how the world works. Loyalty is a concept that is built on the principle of consistency. Sagittarius are loyal, but not always to the people they claim to love. They are loyal to the idea of love. Loyal to the idea of freedom. Loyal to the idea of building a better world. They may love you, but they love the idea of you more. And if you begin to hold them back and retrain them to think like everyone else, they’ll start to resent you for it. Their best matches: (Leo, Aquarius, Aries, and Libra) ";
    }
    if (result == "Capricorn") {
      document.getElementById("qualities").innerHTML = "Hard Worker!";
      document.getElementById("image").src = "zidimg/Capricorn.png";
      document.getElementById("more").innerHTML =
        " <h4>Your Personality:</h4> Capricorns are constantly competing with themselves. They do want praise, though. Not adulation, just praise. Praise is a simple acknowledgment of a job well done. Praise is a pat on the back. They use this as validation to compensate for general feelings of incompetence and inferiority. They plow through adversity with blinders on until they reach success. Capricorns are masters of discipline. The wringing of the hands, the constant reminders, the exacting structure, the ever-increasing goals, the tidal wave of self-criticism that lasts forever. They are the ultimate perfectionist. They can be so absorbed in their own internal monologue that it becomes impossible to get them to look away from themselves. Capricorns are often called “workaholics.” Their best matches: (Taurus, Virgo, Scorpio, and Pisces) ";
    }
  };