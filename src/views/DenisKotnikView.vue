<template>
    <section class="section mt-5">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column">
                    <h3 class="title is-3 has-text-primary" v-text="t('about_me_title')"></h3>
                    <p v-html="t('about_me')"></p>
                </div>
                <div class="column">
                    <img class="img-main" src="@/assets/images/denis_kotnik.jpg" alt="Denis_Kotnik">
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h1 class="title is-3 has-text-primary" v-text="t('links')"></h1>
            <div class="columns is-multiline is-centered has-text-centered is-mobile is-vcentered">
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.psihodinamska-psihoterapija.org/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/psihodinamska_logo.png" alt="Institute_for_psychodynamic_psychotherapy_Slovenia">
                        </a>
                    </figure>
                </div>
                <div class="column is-3-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.ezpps.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ezpps_logo_v1.png" alt="EZPPS">
                        </a>
                    </figure>
                </div>
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://ecpp.ngo/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ecpp_logo.svg" alt="ECPP">
                        </a>
                    </figure>
                </div>
                <div class="column is-1-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.skzp.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/skzp_logo.png" alt="SKZP">
                        </a>
                    </figure>
                </div>
                <div class="column is-2-desktop is-two-thirds-mobile">
                    <figure>
                        <a href="https://www.europsyche.org/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/eap_logo.png" alt="EAP">
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