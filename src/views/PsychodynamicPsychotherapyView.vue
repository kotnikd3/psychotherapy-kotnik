<template>
    <section class="section mt-5">
        <div class="container">
            <div class="block content">
                <h2 class="title is-4 has-text-primary" v-text="t('in_therapy_you_will_do_title')"></h2>
                <p v-html="t('in_therapy_you_will_do')"></p>
            </div>
            <div class="columns is-vcentered">
                <div class="column content">
                    <div class="block mt-6">
                        <h2 class="title is-4 has-text-primary" v-text="t('why_called_psychodynamic_therapy_title')"></h2>
                        <p v-text="t('why_called_psychodynamic_therapy')"></p>
                    </div>
                    <div class="block mt-6">
                        <h2 class="title is-4 has-text-primary" v-text="t('how_long_title')"></h2>
                        <p v-text="t('how_long')"></p>
                    </div>
                    <div class="block mt-6">
                        <h2 class="title is-4 has-text-primary" v-text="t('why_so_often_title')"></h2>
                        <p v-text="t('why_so_often')"></p>
                    </div>
                </div>
                <div class="column">
                    <img class="img-books" src="@/assets/images/books.webp" alt="Books">
                </div>
            </div>
            <div class="block mt-6">
                <h2 class="title is-4 has-text-primary" v-text="t('will_my_therapist_talk_title')"></h2>
                <p v-text="t('will_my_therapist_talk')"></p>
            </div>
            <div class="block mt-6">
                <h2 class="title is-4 has-text-primary" v-text="t('should_I_say_everything_title')"></h2>
                <p v-text="t('should_I_say_everything')"></p>
            </div>
            <div class="block mt-6">
                <h2 class="title is-4 has-text-primary" v-text="t('should_I_say_negative_title')"></h2>
                <p v-text="t('should_I_say_negative')"></p>
            </div>
            <div class="block mt-6">
                <h2 class="title is-4 has-text-primary" v-text="t('can_medication_title')"></h2>
                <p v-text="t('can_medication')"></p>
            </div>
            <div class="block mt-6">
                <h2 class="title is-4 has-text-primary" v-text="t('why_asymetric_title')"></h2>
                <p v-text="t('why_asymetric')"></p>
            </div>
            <div class="block content mt-6 ">
                <h2 class="title is-4 has-text-primary" v-text="t('evidence_title')"></h2>
                <p v-html="t('evidence')"></p>
            </div>
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