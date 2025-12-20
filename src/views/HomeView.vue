<template>
    <!-- Hero -->
    <section class="hero is-medium hero-home">
        <div class="hero-body">
            <div class="container">
                <h2 class="title is-size-4-mobile is-size-2-tablet has-text-light" v-text="t('webpage_title')"></h2>
                <h3 class="subtitle is-size-5-mobile is-size-3-tablet has-text-light" v-text="t('subtitle_locations')"></h3>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="title is-4 has-text-primary" v-text="t('what_is_psychodynamic_therapy_title')"></h2>
            <p v-html="t('what_is_psychodynamic_therapy')"></p>
            <div class="has-text-centered pt-6">
                <RouterLink class="button is-primary is-outlined" :to="{ name: 'psychodynamic_psychotherapy' }" v-text="t('more_about_psychodynamic_psychotherapy')"></RouterLink>
            </div>
        </div>
    </section>
    <section class="section custom-color">
        <div class="container content">
            <div class="columns is-vcentered">
                <div class="column is-5 has-text-centered">
                    <figure>
                        <img class="img-main" src="@/assets/images/Yehan_Wang_Exploding_Horizon.webp" alt="Yehan_Wang_Exploding_Horizon">
                    </figure>
                </div>
                <div class="column is-7">
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
                <RouterLink class="button is-primary is-outlined" :to="{ name: 'denis_kotnik' }" v-text="t('more_about_me')"></RouterLink>
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
        background-image: url("@/assets/images/home_hero.webp");
        background-size: cover;
        background-position: 100% 15%;
        background-repeat: no-repeat;
    }

    .custom-color {
        background-color: $color-grey-1;
    }
</style>
