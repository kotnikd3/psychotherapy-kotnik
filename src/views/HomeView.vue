<template>
    <!-- Hero -->
    <section class="hero is-medium">
        <figure>
            <img  src="@/assets/images/home_hero_top.webp"  alt="Home_image" class="hero-bg-img"/>
        </figure>
        <div class="hero-body">
            <div class="container">
                <h2 class="title is-size-5-mobile is-size-3-tablet has-text-light" v-text="t('webpage_title')"></h2>
                <h3 class="subtitle is-size-6-mobile is-size-4-tablet has-text-light" v-text="t('subtitle_locations')"></h3>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-main">
                    <h5 class="title is-4 has-text-primary" v-text="t('welcomeTitle')"></h5>
                    <p v-html="t('welcomeText')"></p>
                    <div class="has-text-centered pt-6">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'psychodynamic_psychotherapy' }">
                            <p v-html="t('more_about_psychodynamic_psychotherapy')"></p>
                        </RouterLink>
                    </div>
                </div>
                <div class="column is-holden-side">
                    <p class="is-italic has-text-warning is-size-5 has-text-centered" v-html="t('quote')"></p>
                </div>
            </div>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-side has-text-centered">
                    <figure class="image">
                        <img class="img-working-on" src="@/assets/images/home_hero_bottom_left.webp" alt="Working_on_psychotherapy_image">
                    </figure>
                </div>
                <div class="column is-golden-main content">
                    <h5 class="title is-5 has-text-primary" v-text="t('help_with_title')"></h5>
                    <ul v-html="t('help_with')"></ul>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <h5 class="title is-5 has-text-warning pb-5" v-text="t('setting_title')"></h5>

            <div class="columns has-text-centered is-mobile is-multiline">
                <div class="column is-half-mobile">
                    <p class="title has-text-primary"><font-awesome-icon icon="fa-solid fa-euro-sign" /></p>
                    <p v-html="t('setting_fee')"></p>
                </div>
                <div class="column is-half-mobile">
                    <p class="title has-text-primary"><font-awesome-icon icon="fa-regular fa-clock" /></p>
                    <p v-html="t('setting_time')"></p>
                </div>
                <div class="column is-half-mobile">
                    <p class="title has-text-primary"><font-awesome-icon icon="fa-solid fa-language" /></p>
                    <p v-html="t('setting_language')"></p>
                </div>
            </div>
            
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
</style>
