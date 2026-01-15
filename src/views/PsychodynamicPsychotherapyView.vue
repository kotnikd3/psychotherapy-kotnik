<template>
    <section class="section custom-color mt-4">
        <div class="container">
            <h5 class="title is-5 has-text-primary" v-text="t('what_is_psychodynamic_therapy_title')"></h5>
            <p v-html="t('what_is_psychodynamic_therapy')"></p>
        </div>
    </section>

    <section class="section">
        <div class="container content">
            <h5 class="title is-5 has-text-primary" v-text="t('in_therapy_you_will_do_title')"></h5>
            <p v-html="t('in_therapy_you_will_do')"></p>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-main content">
                    <div class="block">
                        <h5 class="title is-5 has-text-warning" v-text="t('why_called_psychodynamic_therapy_title')"></h5>
                        <p v-text="t('why_called_psychodynamic_therapy')"></p>
                    </div>
                    <div class="block">
                        <h5 class="title is-5 has-text-primary" v-text="t('how_long_title')"></h5>
                        <p v-text="t('how_long')"></p>
                    </div>
                    <div class="block">
                        <h5 class="title is-5 has-text-primary" v-text="t('why_so_often_title')"></h5>
                        <p v-text="t('why_so_often')"></p>
                    </div>
                    <div class="block">
                        <h5 class="title is-5 has-text-warning" v-text="t('will_my_therapist_talk_title')"></h5>
                        <p v-text="t('will_my_therapist_talk')"></p>
                    </div>
                </div>
                <div class="column is-golden-side has-text-centered">
                    <img class="img-books" src="@/assets/images/books.webp" alt="Books">
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-golden-side">
                    <h5 class="title is-5 has-text-primary" v-text="t('should_I_say_everything_title')"></h5>
                    <p v-text="t('should_I_say_everything')"></p>
                </div>
                <div class="column is-golden-main">
                    <h5 class="title is-5 has-text-warning" v-text="t('should_I_say_negative_title')"></h5>
                    <p v-text="t('should_I_say_negative')"></p>
                </div>
            </div>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container">
            <div class="columns">
                <div class="column is-golden-main">
                    <h5 class="title is-5 has-text-warning" v-text="t('why_asymetric_title')"></h5>
                    <p v-text="t('why_asymetric')"></p>
                </div>
                <div class="column is-golden-side">
                    <h5 class="title is-5 has-text-primary" v-text="t('can_medication_title')"></h5>
                    <p v-text="t('can_medication')"></p>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container content">
            <h5 class="title is-5 has-text-primary" v-text="t('evidence_title')"></h5>
            <p v-html="t('evidence')"></p>
        </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  	name: 'PsychodynamicPsychotherapyView',
    setup() {
        const { t, locale } = useI18n()

        return { t, locale }
    }
}
</script>
