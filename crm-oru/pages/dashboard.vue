<template>
    <div class="dashboard container">
        <DashboardHeader />
      <div class="dashboard__list">
        <div class="dashboard__listitem dashboard__listheader" :style="grid_style">
            <div class="dashboard__listitem--section" v-for="(item, index) in header">{{ item }}</div>
        </div>

        <div class="dashboard__listitem" :style="grid_style" v-for="(client_item, index) in clients">
            <div class="dashboard__listitem--section borderless"></div>
            <div class="dashboard__listitem--section borderless" v-for="(ci, index) in render_client(client_item)">{{ ci }}</div>
            <div class="dashboard__listitem--section borderless"></div>
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
                'btnsa',
                'Item Id',
                'Type',
                'First Name',
                'Last Name',
                'Country',
                'Status',
                'Created Date',
                'Owner',
                'IsOnline',
                'Last Login',
                'Assigned Date',
                'btnsb'
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
                    owner: "Mike Dameo",
                    is_online: "",
                    last_login: "",
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
                    owner: "Mike Dameo",
                    is_online: "",
                    last_login: "",
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
                    owner: "Mike Dameo",
                    is_online: "",
                    last_login: "",
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
                    owner: "Mike Dameo",
                    is_online: "",
                    last_login: "",
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
                    owner: "Mike Dameo",
                    is_online: "",
                    last_login: "",
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
        }
    }
  }
  </script>

<style lang="scss" scoped>
.dashboard {
    position: relative;

    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100vw;
        height: #{scaleValue(210)};
        background: $primary-color;
        z-index: 1;
    }

    &__list {
        background: $white;
        min-height: #{scaleValue(850)};
        overflow-x: scroll;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    }
    
    &__listitem {
        display: grid;
        grid-gap:  0;
        align-items: center;
        padding: #{scaleValue(16)} #{scaleValue(10)};
        width: #{scaleValue(1600)};
        font-size: #{scaleValue(13)};
        font-weight: 500;

        &:nth-child(odd) {
            background: rgba($primary-color, .1);
        }

        &--section {
            text-align: right;
            border-right: 1px solid $font-color;
            padding-right: #{scaleValue(10)};
            text-transform: capitalize;

            &.borderless {
                border: none;
            }

            &:last-child {
                border: none
            }
        }
    }

    &__listheader {
        background: rgba($blue-white, .6);
        font-weight: 600;
        font-size: #{scaleValue(12)};
        padding: #{scaleValue(12)} #{scaleValue(10)};
    }
}
</style>
  