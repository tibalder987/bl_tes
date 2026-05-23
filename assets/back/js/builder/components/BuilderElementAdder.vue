<template>
    <div class="builder-element-adder">
        <div class="builder-element-adder__menu">
            <div class="builder-element-adder__menu__btn">
                <button class="btn btn-primary"
                        @click.prevent="isAdding = !isAdding">
                    Ajouter un élément
                    <i class="fa"
                       :class="{'fa-angle-up': isAdding, 'fa-plus': !isAdding}"></i>
                </button>
            </div>
            <transition name="slide">
                <ul v-show="isAdding">
                    <li :class="['builder-element-adder__menu__element', availableElement.template]"
                        v-for="availableElement in availableElements"
                        v-bind:key="availableElement.name"
                        @click="select(availableElement.template)">
                        <h5>{{ availableElement.name }}</h5>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
    import availableElements from '../elements/StylesheetElements';

    export default {
        props: ['builderData'],
        data() {
            return {
                availableElements: availableElements(this.builderData),
                isAdding: false,
                currentCategory: ''
            }
        },
        methods: {
            select(template) {
                this.currentCategory = '';
                this.isAdding = false;
                this.$emit('elementAdded', template);
            }
        }
    }
</script>

<style lang="scss">
    $builderAdderColor: #6174d1;

    .builder-element-adder {
        padding: .5rem;
        margin: .5rem;
        border: 1px dashed #e3e7ee;
        display: flex;
        justify-content: flex-end;

        &:hover {
            border-color: #4c5367;
        }

        .builder-element-adder__menu {
            width: 285px;

            .builder-element-adder__menu__btn {
                text-align: right;
            }

            ul {
                list-style: none;
                padding: 0;
            }

            & > ul {
                margin-top: .2rem;
                padding: .2rem;
                border: 1px solid #e3e7ee;
            }

            .builder-element-adder__menu__element {
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: .5rem;

                &:hover {
                    background: $builderAdderColor;

                    h5 {
                        color: #ffffff;
                    }
                }

                h5 {
                    font-size: .9rem;
                    margin: 0;
                    width: 100%;
                    text-align: left;
                }

                img {
                    margin-right: .5rem;
                }
            }
        }
    }

    .slide-enter-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }

    .slide-leave-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
        max-height: 100px;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        overflow: hidden;
        max-height: 0;
    }
</style>