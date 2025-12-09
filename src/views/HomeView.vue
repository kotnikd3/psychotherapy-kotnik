<template>
    <!-- Hero -->
    <section class="hero is-large hero-home">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1 has-text-light" v-text="t('psychodynamic_psychotherapy')"></h1>
                <h2 class="subtitle is-2 has-text-light" v-text="t('subtitle_locations')"></h2>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="title is-3 has-text-primary" v-text="t('what_is_psychodynamic_therapy_title')"></h2>
            <p v-html="t('what_is_psychodynamic_therapy')"></p>
            <div class="has-text-centered pt-6">
                <RouterLink class="button is-medium is-primary is-outlined" :to="{ name: 'psychodynamic_psychotherapy' }" v-text="t('more_about_psychodynamic_psychotherapy')"></RouterLink>
            </div>
        </div>
    </section>
    <section class="section custom-color">
        <div class="container content">
            <div class="columns is-vcentered">
                <div class="column is-5 has-text-centered">
                    <figure>
                        <img class="img-main" src="@/assets/images/Yehan_Wang_Exploding_Horizon.jpg" alt="Yehan_Wang_Exploding_Horizon">
                        <!-- <figure class="image-figure"></figure> -->
                        <figcaption>Yehan Wang: Exploding Horizon</figcaption>
                    </figure>
                </div>
                <div class="column is-7">
                    <h2 class="title is-3 has-text-primary" v-text="t('help_with_title')"></h2>
                    <ul v-html="t('help_with')"></ul>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <h2 class="title is-3 has-text-primary" v-text="t('setting_title')"></h2>
            <ul v-html="t('setting')"></ul>  
        </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  	name: 'HomeView',
    setup() {
        const { t, locale } = useI18n()

        return { t, locale }
    }
}
</script>

<style lang="scss" scoped>
    @use '@/assets/variables.scss' as *;

    .img-main {
        position: relative;
        // background-image: url("@/assets/images/Yehan_Wang_Exploding_Horizon.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        max-height: 500px;
    }

    .hero-home {
        position: relative;
        background-image: url("@/assets/images/home_hero.jpg");
        background-size: cover;
        background-position: 100% 30%;
        // background-position: 10%;
        background-repeat: no-repeat;

        /* Optional: dark overlay for better text visibility */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;

            /* LEFT → RIGHT fade (black 0.7 → transparent) */
            // background: linear-gradient(
            //     to right,
            //     rgba(0, 0, 0, 0.9) 0%,
            //     rgba(0, 0, 0, 0.7) 30%,
            //     rgba(0, 0, 0, 0) 60%,
            //     rgba(0, 0, 0, 0) 100%
            // );
        }

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

    .custom-color {
        background-color: $color-grey-1;
    }
</style>
