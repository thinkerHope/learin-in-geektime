<template>
  <div class="co">
    <div class="systemInfo" :style="{height:height,width:width}" />
    <el-button @click="startConnection">连接</el-button>
    <el-button @click="endConnection">断开连接</el-button>
  </div>
</template>

<script>
    import { start } from '@/api/systemInfo';

    export default {
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            }
        },
        data() {
        },
        mounted() {
            // this.startConnection()
        },
        sockets: {
            // 这里面的每一个函数名都对应服务端的socke.emit的事件名
            // socket('sysUpdate')
            connected(data) {
                if (data) {
                    console.log('连接成功', data)
                }
            },
            sysUpdate(data) {
                console.log(data)
            },
            unConnection(data) {
                console.log(data)
                this.$socket.close()
            }
        },
        methods: {
            // 开启连接
            async startConnection() {
                const { code } = await start();
                if (code === 200) {
                    this.$socket.connect();
                } else {
                    console.log('conncet err');
                }
            },
            endConnection() {
                this.$socket.emit('endConnection', '断开连接')
            }
        }
    }
</script>