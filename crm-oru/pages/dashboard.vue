<template>
    <div class="dashboard container">
        <DashboardHeader />
      <div class="dashboard__list">
        <div class="dashboard__listitem dashboard__listheader" :style="header_grid_style">
            <div class="dashboard__listitem--section dashboard__listheader--section align-text-to-right" v-for="(item, index) in header">{{ item }}</div>
        </div>

        <div class="dashboard__listitem" :style="grid_style" v-for="(client_item, index) in clients">
            <div class="dashboard__listitem--section borderless icons">
                <div class="dashboard__listitem--checkbox">
                    <input type="checkbox"/>
                </div>
                <div class="dashboard__listitem--svg">
                    <span class="svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprites.svg#icon-star-full"></use>
                        </svg>
                    </span>
                </div>
                <div class="dashboard__listitem--svg">
                    <span class="svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprites.svg#icon-phone1"></use>
                        </svg>
                    </span>
                </div>
                <div class="dashboard__listitem--svg">
                    <span class="svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprites.svg#icon-edit-pencil"></use>
                        </svg>
                    </span>
                </div>
                <div class="dashboard__listitem--svg">
                    <span class="svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprites.svg#icon-ellipsis-h"></use>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="dashboard__listitem--section borderless align-text-to-right" v-for="(ci, index) in render_client(client_item)">{{ ci }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
        render_client(client) {
            const client_arr = []
            for (const key in client) {
                if (client.hasOwnProperty(key)) {
                    client_arr.push(client[`${key}`]);

                    if (client_arr.length === Object.keys(client).length) {
                        return client_arr;
                    }
                }
            }
        }
    },
    computed: {
        header() {
            return [
                '',
                'Item Id',
                'Type',
                'First Name',
                'Last Name',
                'Country',
                'Status',
                'Created Date',
                'Assigned Date'
            ]
        },
        clients() {
            return [
                {
                    item_id: "83782983",
                    type: "real",
                    first_name: "Jerry",
                    last_name: "Springer",
                    Country: "Canada",
                    Status: "Status",
                    created: "5/1/2023",
                    assigned_date: "5/1/2023"
                },
                {
                    item_id: "83782983",
                    type: "real",
                    first_name: "Mike",
                    last_name: "Mengle",
                    Country: "Canada",
                    Status: "Status",
                    created: "5/1/2023",
                    assigned_date: "5/1/2023"
                },
                {
                    item_id: "83782983",
                    type: "real",
                    first_name: "Mike",
                    last_name: "Mengle",
                    Country: "Canada",
                    Status: "Status",
                    created: "5/1/2023",
                    assigned_date: "5/1/2023"
                },
                {
                    item_id: "83782983",
                    type: "real",
                    first_name: "Mike",
                    last_name: "Mengle",
                    Country: "Canada",
                    Status: "Status",
                    created: "5/1/2023",
                    assigned_date: "5/1/2023"
                },
                {
                    item_id: "83782983",
                    type: "real",
                    first_name: "Mike",
                    last_name: "Mengle",
                    Country: "Canada",
                    Status: "Status",
                    created: "5/1/2023",
                    assigned_date: "5/1/2023"
                }
            ]
        },
        grid_number() {
            return this.header.length;
        },
        grid_style() {
            return {
                display: 'grid',
                gridTemplateColumns: `repeat(${this.grid_number}, 1fr)`,
            }
        },
        header_grid_style() {
            return {
                display: 'grid',
                gridTemplateColumns: `repeat(${this.grid_number}, 1fr)`,
            }
        }
    }
  }
  </script>

<style lang="scss" scoped>
.dashboard {
    @include container;

    &__list {
        @include content;
        overflow-x: scroll;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    }
    
    &__listitem {
        grid-gap:  0;
        padding: #{scaleValue(16)} #{scaleValue(10)};
        font-size: #{scaleValue(13)};
        font-weight: 500;

        &:nth-child(odd) {
            background: rgba($primary-color, .1);
        }

        &--section {
            border-right: 1px solid rgba($font-color, .2);
            padding-right: #{scaleValue(10)};
            text-transform: capitalize;

            &.icons {
                display: flex;
            }

            &:last-child {
                border: none
            }
        }

        &--checkbox {
            display: flex;
            align-items: center;
            margin-right: #{scaleValue(16)};
            cursor: pointer;
        }

        &--svg {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-right: #{scaleValue(16)};

            & svg {
                fill: rgba($dark-graphite, .5);
                height: #{scaleValue(13)};
                width: #{scaleValue(13)};
                display: inline-block;
                transform: translateY(#{scaleValue(.5)});
            }

            &.clicked {
                color: $metallic-gold;
            }
        }
    }

    &__listheader {
        background: rgba(74, 78, 77, .1) !important;
        font-weight: 600;
        font-size: #{scaleValue(10.5)};
        padding: #{scaleValue(18)} #{scaleValue(10)};

        &--section {
            text-transform: uppercase;
            opacity: .8;
        }
    }
}
</style>
  