<template>
    <div class="itempage container">
        <DashboardHeader />
        <div class="itempage__body">
            <div class="itempage__bodyheader">
                <div class="itempage__headerarea">
                    <h1>General Subject Info</h1>
                </div>
                <div class="itempage__headerarea">
                    <span class="svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprites.svg#icon-edit-pencil"></use>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="itempage__content">
                <div class="itempage__contentleft">
                    <div class="itempage__section">
                        <label class="itempage__label">First Name</label>
                        <span class="itempage__match">Seri</span>
                    </div>
                    <div class="itempage__section">
                        <label class="itempage__label">Last Name</label>
                        <span class="itempage__match">Meri</span>
                    </div>
                    <div class="itempage__section">
                        <label class="itempage__label">Email</label>
                        <span class="itempage__match">Serimeri@gmail.com</span>
                    </div>
                    <div class="itempage__section">
                        <label class="itempage__label">Phone Number</label>
                        <span class="itempage__match">6017873664664</span>
                    </div>
                </div>

                <div class="itempage__contentright">
                    <h3 class="itempage__contentright--h3">Actions</h3>
                    <div class="itempage__actions">
                        <span class="itempage__btnarea">
                            <span class="svg">
                                <svg>
                                    <use xlink:href="@/assets/imgs/sprites.svg#icon-phone1"></use>
                                </svg>
                            </span>
                            <button>Copy Number</button>
                        </span>
                        <span class="itempage__btnarea">
                            <span class="svg">
                                <svg>
                                    <use xlink:href="@/assets/imgs/sprites.svg#icon-at-symbol"></use>
                                </svg>
                            </span>
                            <button>Copy Email</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.itempage {
    @include container;

    &__content {
        @include content;
        padding: #{scaleValue(30)};
    }

    & h1 {
        @include h1;  
        margin: #{scaleValue(30)} 0;
    }

    & h2 {
        font-weight: 500;
        font-size: #{scaleValue(18)};
    }

    &__bodyheader {
        display: flex;
        justify-content: space-between;
    }

    &__headerarea {

        & svg {
            fill: $font-color;
            cursor: pointer;
        }
    }
    
    &__content {
        display: flex;
    }

    &__contentleft {
        width: #{scaleValue(1000)};
        margin-right: #{scaleValue(40)};
    }

    &__section {
        //margin-bottom: #{scaleValue(30)};
        border-bottom: 1px solid rgba($font-color, .2);
        display: flex;
        align-items: center;
        padding: #{scaleValue(18)} 0;

        &:nth-child(1) {
            border-top: 1px solid rgba($font-color, .2);
        }

    }

    &__label {
        font-size: #{scaleValue(18)};
        font-weight: 500;
        display: inline-block;
        width: #{scaleValue(500)};
        color: rgba($font-color, .5);
    }

    &__match {
        font-size: #{scaleValue(16)};
        font-weight: 400;
        display: inline-block;
        width: #{scaleValue(400)};
        color: rgba($font-color, .9);
    }

    &__contentright {
        border-left: 1px solid rgba($font-color, .2);
        padding-left: #{scaleValue(40)};

        &--h3 {
            font-weight: 500;
            font-size: #{scaleValue(18)};
            margin-bottom: #{scaleValue(50)};
        }
    }

    &__actions {
        display: flex;
        flex-direction: column;
    }

    &__btnarea {
        margin-bottom: #{scaleValue(40)};
        display: flex;
        align-items: center;
        cursor: pointer;

        & svg {
            fill: rgba($font-color, .4);
            height: #{scaleValue(10)};
            width: #{scaleValue(10)};
        }

        & button {
            outline: none;
            background: none;
            border: none;
            margin-left: #{scaleValue(10)};
            font-size: #{scaleValue(13)};
            font-weight: 700;
            cursor: pointer;
            color: $primary-color;
        }
    }
}
</style>