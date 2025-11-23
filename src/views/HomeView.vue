<template>
    <!-- Hero -->
    <section class="hero is-medium hero-home">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1 has-text-light">Psychodynamic Psychotherapy</h1>
                <h2 class="subtitle is-2 has-text-light">Utrecht, Leeuwarden</h2>
            </div>
        </div>
    </section>

    <!-- INTRO -->
    <section class="section">
        <div class="container content">

            <h2 class="title is-3">What is Psychotherapy?</h2>
            <p>
                Psychotherapy fundamentally means helping or treating psychological difficulties and disorders through conversation, as described by its founder, the father of psychoanalysis, Sigmund Freud. However, contemporary psychotherapy differs from Freud’s original psychoanalytic approach. It has evolved by integrating modern, research-based theories and by using a wide range of verbal and non-verbal methods and techniques that support individuals in distress and foster their inner growth.
                <br><br>
                It is a form of support that provides a safe and confidential relationship in which a person can open up and express the difficulties or challenges they are facing. In this process, the psychotherapist helps them explore, recognize, and gradually change unhelpful patterns of thinking, experiencing, and behaving — and to bring these changes into their everyday life.
            </p>

            <h2 class="title is-3 mt-6">Pomagam vam lahko pri ...</h2>
            <p>
                - slaba samopodoba in samospoštovanje
                - težave v odnosih
                - težave z regulacijo afektov
                - težave s prilagajanjem na stres
                - težave s kognitivnimi funkcijami

                - tesnobi in napadih panike,
                - različnih strahovih in fobijah,
                - depresiji,
                - žalovanju,
                - občutkih sramu in krivde,
                - obupu, pomanjkanju volje, notranji praznini,
                - nizki samopodobi in občutkih manjvrednosti,
                - nespečnosti,
                - težavah z jezo in agresijo,
                - težavah v partnerskih, družinskih in drugih odnosih,
                - psihosomatskih boleznih,
                - premagovanju stresa,
                - poglobljenem spoznavanju odnosa s samim seboj in v odnosu z drugimi,
                - duhovnih in eksistenčnih krizah,
                - izboljšanju kakovosti vašega življenja.

                I work with individuals who experience anxiety, depression, relationship difficulties, identity questions,
                stress, low self-esteem, or a general sense of being stuck. Together we create space for understanding
                your emotional life and strengthening your capacity to navigate challenges.
            </p>

            <h2 class="title is-3 mt-6">Therapeutic Frame</h2>
            <ul>
                <li><strong>Frequency:</strong> typically once or twice per week</li>
                <li><strong>Duration:</strong> 45–50 minutes per session</li>
                <li><strong>Approach:</strong> psychodynamic / psychoanalytic framework</li>
                <li><strong>Confidentiality:</strong> your privacy and safety are central</li>
            </ul>

            <h2 class="title is-3 mt-6">Location</h2>
            <ul>
                <li>Utrecht – private practice room</li>
                <li>Leeuwarden – private practice room</li>
                <li>Online – secure video sessions</li>
            </ul>

            <h2 class="title is-3 mt-6">Fees</h2>
            <p>
                The fee for individual psychotherapy is <strong>€80 per session</strong> (45–50 minutes).
                Reduced-fee options may be available depending on individual circumstances.
            </p>
        </div>
    </section>

    <section class="section">
        <div class="container">
            Home View
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .hero-home {
        position: relative;
        background-image: url("@/assets/images/home_hero.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        /* Optional: dark overlay for better text visibility */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.15); 
            z-index: 0;
        }

        // .hero-body {
        //     position: relative;
        //     z-index: 1; // text above overlay
        //     padding: 3rem 1.5rem;
        // }

        .title {
            font-size: 2.2rem; /* mobile-safe size */
            font-weight: 700;
        }

        .subtitle {
            font-size: 1.4rem;
            font-weight: 300;
        }

        /* Larger text on tablets/desktops */
        @media (min-width: 768px) {
            .title { font-size: 3rem; }
            .subtitle { font-size: 2rem; }
        }
    }
</style>