<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">
                    <img src="@/assets/images/logo.webp" alt="psychotherapy_kotnik_logo">
                </RouterLink>
                <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">{{ t('webpage_title') }}</RouterLink>
                <a 
                    role="button" 
                    :class="['navbar-burger', { 'is-active' : isMenuActive }]"
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navMenu"
                    @click="isMenuActive = !isMenuActive"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navMenu" :class="['navbar-menu', { 'is-active' : isMenuActive }]">
                <div class="navbar-end">
                    <RouterLink class="navbar-item" :to="{ name: 'psychodynamic_psychotherapy' }" @click="isMenuActive = false;">{{ t('psychodynamic_psychotherapy') }}</RouterLink>
                    <RouterLink class="navbar-item" :to="{ name: 'denis_kotnik' }" @click="isMenuActive = false;">Denis Kotnik</RouterLink>
                    <div class="navbar-item">
                        <div class="buttons has-addons">
                            <button @click="locale = 'sl'" :class="['button is-small', { 'is-ghost': locale === 'sl' }]">SL</button>
                            <button @click="locale = 'en'" :class="['button is-small', { 'is-ghost': locale === 'en' }]">EN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <RouterView />

    <div class="container">
        <hr>
    </div>
    
    <section class="section">
        <div class="container is-max-tablet">
            <h5 class="title is-5 has-text-centered has-text-primary" v-text="t('contact_me')"></h5>
            <ContactForm></ContactForm>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="columns is-mobile is-multiline is-centered">
                <div class="column is-half-mobile is-narrow">
                    <h6 class="title is-6 has-text-primary"><strong v-text="t('contact')"></strong></h6>
                    <ul>
                        <li>
                            <a href="tel:+31628865682" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                </span>
                                <span>+31 6 28 86 56 82</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@psychotherapy-kotnik.com" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-regular fa-envelope" />
                                </span>
                                <span>info@psychotherapy-kotnik.com</span>
                            </a>
                        </li>
                        <!-- <li>
                            <span class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-gavel" />
                                </span>
                                <span>KVK number: to be acquired</span>
                            </span>
                        </li> -->
                    </ul>
                </div>
                <div class="column is-half-mobile is-narrow">
                    <h6 class="title is-6 has-text-primary"><strong v-text="t('locations')"></strong></h6>
                    <ul>
                        <li>
                            <a href="https://maps.app.goo.gl/2tMEEyX3f1RU8qbY7" target="_blank" rel="noopener noreferrer" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>Polluxweg 20<br>8938 AZ Leeuwarden<br>The Netherlands</span>
                            </a>
                        </li>
                        <li>
                            <div class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>online</span>
                            </div>
                        </li>
                        <li>
                            <div class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>8210 Trebnje<br>Slovenia</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="has-text-centered pt-5 has-text-primary">
                <p><span v-text="t('webpage_title')"></span> <font-awesome-icon icon="fa-regular fa-copyright" /> 2026</p>
				<p style="font-size: x-small;"><i><a href="https://www.kotnik.si" target="_blank"><span v-text="t('made_by')"></span> kotnik.si</a></i></p>
			</div>
        </div>
    </footer>
</template>

<script>
import ContactForm from '@/views/ContactForm.vue';
import { useI18n } from 'vue-i18n';

export default {
  	name: 'App',
    components: {
        ContactForm,
    },
    setup() {
        const { t, locale } = useI18n()

        return { t, locale }
    },
    data() {
            return {
                isMenuActive: false,
            }
        },
}
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .navbar-item.router-link-exact-active {
        background-color: $color-primary-select;
        text-decoration: underline;
    }
</style>
