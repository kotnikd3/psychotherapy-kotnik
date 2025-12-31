<template>
    <!-- Hero -->
    <section class="hero is-medium">
        <figure>
            <img  src="@/assets/images/home_hero_top.webp"  alt="Home_image" class="hero-bg-img"/>
        </figure>
        <div class="hero-body">
            <div class="container">
                <h2 class="title is-size-4-mobile is-size-2-tablet has-text-light" v-text="t('webpage_title')"></h2>
                <h3 class="subtitle is-size-5-mobile is-size-3-tablet has-text-light" v-text="t('subtitle_locations')"></h3>
            </div>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container">
            <h2 class="title is-4 has-text-primary" v-text="t('welcomeTitle')"></h2>
            <p v-html="t('welcomeText')"></p>
            <div class="has-text-centered pt-6">
                <RouterLink class="button is-primary is-outlined" :to="{ name: 'psychodynamic_psychotherapy' }">{{ t('more_about_psychodynamic_psychotherapy') }}</RouterLink>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <p class="is-italic has-text-primary is-size-4 has-text-centered" v-html="t('quote')"></p>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-5 has-text-centered">
                    <figure class="image">
                        <img class="img-working-on" src="@/assets/images/home_hero_bottom_left.webp" alt="Working_on_psychotherapy_image">
                    </figure>
                </div>
                <div class="column is-7 content">
                    <h2 class="title is-4 has-text-primary" v-text="t('help_with_title')"></h2>
                    <ul v-html="t('help_with')"></ul>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <h2 class="title is-4 has-text-primary" v-text="t('setting_title')"></h2>
            <ul v-html="t('setting')"></ul>
            <div class="has-text-centered pt-6">
                <RouterLink class="button is-primary is-outlined" :to="{ name: 'denis_kotnik' }">{{ t('more_about_me') }}</RouterLink>
            </div>
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

    .hero {
        position: relative;
        overflow: hidden;
    }

    .hero-bg-img {
        position: absolute;
        top: 0;       /* necessary for proper absolute positioning */
        left: 0;      /* necessary */
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 80%;
    }


    .custom-color {
        background-color: $color-grey-1;
    }
</style>
