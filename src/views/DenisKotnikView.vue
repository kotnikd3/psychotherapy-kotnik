<template>
    <section class="section mt-4">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-main">
                    <h5 class="title is-5 has-text-primary" v-text="t('about_me_title')"></h5>
                    <p v-html="t('about_me')"></p>
                </div>
                <div class="column is-golden-side has-text-centered">
                    <img class="img-denis-kotnik" src="@/assets/images/denis_kotnik.webp" alt="Denis_Kotnik">
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="is-italic has-text-warning is-size-5 has-text-centered">
                <p v-html="t('about_song')"></p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h5 class="title is-5 has-text-primary" v-text="t('links')"></h5>
            <div class="columns is-multiline is-centered has-text-centered is-mobile is-vcentered">
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.psihodinamska-psihoterapija.org/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/psihodinamska_logo.webp" alt="Institute_for_psychodynamic_psychotherapy_Slovenia">
                        </a>
                    </figure>
                </div>
                <div class="column is-3-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.ezpps.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ezpps_logo_v1.webp" alt="EZPPS">
                        </a>
                    </figure>
                </div>
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://ecpp.ngo/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ecpp_logo.webp" alt="ECPP">
                        </a>
                    </figure>
                </div>
                <div class="column is-1-desktop is-one-quarter-mobile">
                    <figure>
                        <a href="https://www.skzp.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/skzp_logo.webp" alt="SKZP">
                        </a>
                    </figure>
                </div>
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.europsyche.org/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/eap_logo.webp" alt="EAP">
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  	name: 'DenisKotnikView',
    setup() {
        const { t, locale } = useI18n()

        return { t, locale }
    }
}
</script>