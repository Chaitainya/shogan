let martialArts = [
    {
        name: 'karate',
        description: "Karate is a martial art that originated in Okinawa, Japan, and has since gained global popularity. It focuses on striking techniques, such as punches, kicks, and knee strikes, for self-defense and combat. Karate training incorporates various stances, blocks, and forms called katas, which help develop discipline, balance, and technique. The practice of karate promotes physical fitness, flexibility, and coordination. It also emphasizes mental focus, self-control, and the development of character. Karate practitioners progress through different belt ranks, symbolizing their level of skill and knowledge. The training takes place in dojos, under the guidance of experienced instructors known as sensei. Karate competitions provide opportunities for practitioners to showcase their abilities in sparring and kata performances. Karate's philosophy encourages respect, humility, and the pursuit of personal growth. It is not only a martial art but a way of life that promotes values such as integrity and perseverance. The techniques and principles of karate can be applied to enhance self-confidence and self-discipline in daily life. Karate is practiced by people of all ages and backgrounds, offering physical and mental benefits to its practitioners. It is a comprehensive martial art that combines effective self-defense techniques with a holistic approach to personal development. The traditional uniform worn in karate is called a gi, and the training often includes etiquette and rituals to cultivate respect and discipline. Karate's effectiveness lies in its practical application of techniques, focusing on speed, precision, and body mechanics. It is both a challenging physical activity and a means to cultivate inner strength and mental resilience. Karate's cultural significance and rich history contribute to its continued popularity and influence in the martial arts world."
    },
    {
        name: 'mma',
        description: "Mixed Martial Arts (MMA) is a full-contact combat sport that combines various fighting styles and techniques from disciplines such as boxing, wrestling, Brazilian Jiu-Jitsu, Muay Thai, and more. MMA fighters engage in both striking and grappling, utilizing punches, kicks, elbows, knee strikes, takedowns, and submissions. MMA competitions take place in an octagonal cage known as the 'octagon.' Fighters must demonstrate proficiency in multiple areas to succeed in MMA. Training in MMA involves a rigorous and diverse regimen that encompasses striking, grappling, conditioning, and sparring. MMA requires athletes to possess physical strength, agility, endurance, and mental toughness. Weight classes exist to ensure fair competition and to accommodate different body types. The Ultimate Fighting Championship (UFC) is the most prominent and widely recognized MMA organization worldwide. Safety measures, including protective equipment and referee intervention, are in place to minimize the risk of injury. MMA's popularity has grown significantly due to its dynamic nature and the excitement it offers to both participants and spectators. The sport showcases the evolution of martial arts and serves as a platform for fighters to display their skills and athleticism. MMA's rules and regulations have evolved over time to prioritize athlete safety while still promoting intense competition. It has become a global phenomenon, with fighters from various backgrounds and countries competing at the highest level. MMA's influence extends beyond the sport itself, impacting fitness training, self-defense techniques, and inspiring individuals to pursue a well-rounded approach to martial arts."
    },
    {
        name: 'kickboxing',
        description: "Kickboxing is a combat sport that combines elements of boxing and martial arts, focusing on strikes using punches, kicks, knees, and elbows. It originated in the 1960s and gained popularity worldwide. Kickboxing training involves developing techniques, footwork, and conditioning for both offensive and defensive maneuvers. Competitions are held in rings, and fighters are categorized by weight classes. Kickboxing emphasizes high-intensity workouts, cardiovascular fitness, and overall strength and agility. Different styles of kickboxing exist, including Muay Thai, full-contact, and K-1 rules. Fighters wear gloves and protective gear during matches to ensure safety. Kickboxing provides a platform for athletes to showcase their skills, precision, and power through striking combinations and defensive strategies. The sport requires discipline, mental focus, and a strong competitive spirit. Kickboxing training improves balance, coordination, flexibility, and endurance. It is popular as both a recreational fitness activity and a professional sport. Kickboxing techniques have practical applications for self-defense purposes. The sport has a dedicated following and is featured in events such as Glory, K-1, and Bellator Kickboxing. It continues to evolve with new techniques and strategies being developed over time. Kickboxing is an effective way to build self-confidence, release stress, and improve overall physical fitness. It offers a challenging and dynamic training experience for individuals of various fitness levels and goals. The combination of punches, kicks, and knee strikes in kickboxing provides a full-body workout, targeting different muscle groups. It requires mental discipline and adaptability to respond to opponents' movements and adjust strategies accordingly. Kickboxing promotes sportsmanship, respect, and personal growth, encouraging practitioners to push their limits and achieve their full potential."
    },
    {
        name: 'fitness',
        description: "Fitness is the state of physical and mental well-being achieved through regular exercise, proper nutrition, and healthy lifestyle choices. It encompasses strength, endurance, flexibility, and overall physical health. Regular physical activity, such as cardio exercises, strength training, and flexibility exercises, is essential for maintaining fitness. Fitness also includes mental health aspects, such as reducing stress, improving mood, and promoting cognitive function. Proper nutrition, including a balanced diet and adequate hydration, plays a vital role in maintaining fitness. Fitness goals vary among individuals and may include weight loss, muscle gain, improved athletic performance, or overall wellness. Regular physical activity can help prevent chronic diseases such as heart disease, diabetes, and obesity. Engaging in group fitness classes or working with a personal trainer can provide guidance and motivation. Fitness trackers and mobile apps are popular tools for monitoring progress and setting goals. Cross-training, which involves varying types of exercises, helps to avoid plateaus and prevent overuse injuries. Rest and recovery are crucial components of fitness, allowing the body to repair and adapt to the demands of exercise. Fitness can be achieved at any age or fitness level, and it's never too late to start incorporating physical activity into daily routines. Regular exercise boosts energy levels, improves sleep quality, and enhances overall quality of life. Fitness promotes body confidence, self-esteem, and a positive body image. It encourages a healthy lifestyle and serves as a foundation for lifelong wellness."
    },
    {
        name: 'defence',
        description: "Empower yourself with self-defense through martial arts. Develop the skills and confidence needed to protect yourself and your loved ones. Our martial arts program focuses on practical techniques, teaching you how to defend against real-life threats. Enhance your awareness, learn effective strikes and blocks, and gain the ability to navigate challenging situations with self-assurance. Invest in your safety and join us today."
    }
]

function readMore(fightSelected){
    martialArts.forEach(fight => {
        if(fight.name === fightSelected){
            document.getElementById('martialArtName').innerHTML = fight.name;
            document.getElementById('martialArtDescription').innerHTML = fight.description;
        }
    })
    $('#read-more-modal').modal('show');
}