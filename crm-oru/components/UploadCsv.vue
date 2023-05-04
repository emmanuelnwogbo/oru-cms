<template>
    <div class="uploadcsv" @click.stop="open_csvupload">
        <div class="uploadcsv__body" @click.stop="open_csv">
            <h2>Upload Csv Files or Excel files</h2>

            <div class="uploadcsv__content">
                <div class="uploadcsv__fileinput">
                    <label for="file-upload" class="uploadcsv__uploadicon">
                        <span>
                            <svg>
                                <use xlink:href="@/assets/imgs/sprites.svg#icon-open_in_browser"></use>
                            </svg>
                        </span>
                    </label>
                    <input id="file-upload" @change="handleFileUpload" type="file" accept=".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" multiple>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['open_csvupload'],
    methods: {
        open_csv(event) {
            event.stopPropagation()
            return ''
        },
        handleFileUpload(event) {
            const fileList = event.target.files;
            const formData = new FormData();

            for (let i = 0; i < fileList.length; i++) {
                formData.append('files[]', fileList[i]);
            }

            fetch('http://localhost:8080/upload/csv', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.uploadcsv {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .3);
    z-index: 3;

    &__body {
        margin: 0 auto;
        background: $white;
        width: #{scaleValue(600)};
        height: #{scaleValue(300)};
        border-radius: #{scaleValue(10)};
        margin-top: #{scaleValue(60)};
        padding-top: #{scaleValue(30)};

        & h2 {
            color: $font-color;
            text-align: center;
            font-weight: 500;
        }
    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__fileinput {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & input {
            display: none;
        }
    }

    &__uploadicon {
        height: #{scaleValue(100)};
        width: #{scaleValue(100)};
        border-radius: 100%;
        border: 1px solid $primary-color;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: #{scaleValue(50)};
        cursor: pointer;
        
        & svg {
            height: #{scaleValue(40)};
            width: #{scaleValue(40)};
            fill: $primary-color;
        }
    }
}
</style>