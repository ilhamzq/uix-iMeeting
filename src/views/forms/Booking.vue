<script setup>
import { ref } from 'vue'
import Text from '../../components/Text.vue'
import Select from '../../components/Select.vue'
import Date from '../../components/Date.vue'
import Number from '@/components/Number.vue'
import Checkbox from '@/components/Checkbox.vue'
import CUnit from '@/controllers/Unit'
import CRoom from '@/controllers/Room'
import CTime from '@/controllers/Time'
import CConsumption from '@/controllers/Consumption'

const label = ref([
    'Unit',
    'Ruang Meeting',
    'Kapasitas',
    'Tanggal Rapat',
    'Waktu Mulai',
    'Waktu Selesai',
    'Jumlah Peserta',
    'Jenis Konsumsi',
    'Nominal Konsumsi'
])
const place = ref([
    'Pilih Unit',
    'Pilih Ruang Meeting',
    '',
    '',
    'Pilih Waktu Mulai',
    'Pilih Waktu Selesai',
    'Masukkan Jumlah Peserta',
    '',
    ''
])
const value = ref([
    '',
    '',
    '0',
    '',
    '',
    '',
    '',
    ['','',''],
    '0'
])
const onChange = (e) => {
    value.value[e[0]] = e[1]
    handleSubmit()
}
const onCheck = (e) => {
    value.value[e[0]][e[1]] = e[2]
    handleSubmit()
}
const onChangeTime1 = (e) => {
    if (parseInt(e[1]) > parseInt(value.value[e[0] + 1])) {
        value.value[e[0]] = ''
    } else {
        value.value[e[0]] = e[1]
        getSnack(parseInt(e[1]),parseInt(value.value[e[0] + 1]))
    }
    handleSubmit()
}
const onChangeTime2 = (e) => {
    if (parseInt(e[1]) < parseInt(value.value[e[0] - 1])) {
        value.value[e[0]] = ''
    } else {
        value.value[e[0]] = e[1]
        getSnack(parseInt(value.value[e[0] - 1]),parseInt(e[1]))
    }
    handleSubmit()
}
const onCalculate = (e) => {
    value.value[e[0]] = e[1]
    getCalculate(parseInt(e[1]))
    handleSubmit()
}
function getCalculate(qty) {
    value.value[8] = '0'
    if (qty > 0) {
        let sum = 0
        if (value.value[7][0] !== '') {
            sum = sum + parseInt(consumptionList.value[0].maxPrice)
        }
        if (value.value[7][1] !== '') {
            sum = sum + parseInt(consumptionList.value[1].maxPrice)
        }
        if (value.value[7][2] !== '') {
            sum = sum + parseInt(consumptionList.value[2].maxPrice)
        }
        value.value[8] = new Intl.NumberFormat('id-ID').format(sum * qty)
    }
}
function getSnack(t1,t2) {
    value.value[7] = ['','','']
    if (t1 < 11 && t2 > 0) {
        value.value[7] = [consumptionList.value[0].id,'','']
    }
    if (t1 >= 11 && t2 <= 14) {
        value.value[7] = ['',consumptionList.value[1].id,'']
    }
    if (t1 === 9 && t2 === 16) {
        value.value[7] = [consumptionList.value[0].id,consumptionList.value[1].id,consumptionList.value[2].id]
    }
    getCalculate(parseInt(value.value[6]))
}

const emit = defineEmits(['onSubmit'])
function handleSubmit() {
    let s = 0
    for (let e=3;e<value.value.length - 2;e++) {
        if (value.value[e] === '') {
            break
        }
        s++
    }
    if (s === value.value.length - 5) {
        emit('onSubmit', true)
    }
}

const unitList = ref(CUnit.read())
const roomList = ref(CRoom.read())
const timeList1 = ref(CTime.read())
const timeList2 = ref(CTime.read())
const consumptionList = ref(null)

async function readConsumption() {
    await CConsumption.read()
    .then(res => {
        consumptionList.value = res
    })
}
readConsumption()

</script>

<template>
    <div class="box gap-[20px]">
        <h2>Informasi Ruang Meeting</h2>
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <Select :label="label[0]" :index="0" @onChange="onChange" :place="place[0]" :option="unitList" :value="value[0]" />
            <Select :label="label[1]" :index="1" @onChange="onChange" :place="place[1]" :option="roomList" :value="value[1]" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <Text :label="label[2]" :index="2" @onChange="onChange" :place="place[2]" :value="value[2]" :is-disabled="true" />
        </div>
    </div>
    <div class="box gap-[20px]">
        <h2>Informasi Rapat</h2>
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <Date :label="label[3]" :index="3" @onChange="onChange" :value="value[3]" />
            <Select :label="label[4]" :index="4" @onChange="onChangeTime1" :place="place[4]" :option="timeList1" :value="value[4]" />
            <Select :label="label[5]" :index="5" @onChange="onChangeTime2" :place="place[5]" :option="timeList2" :value="value[5]" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <Number :label="label[6]" :index="6" @onChange="onCalculate" :place="place[6]" :value="value[6]" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <Checkbox :is-disabled="true" :label="label[7]" :index="7" @onCheck="onCheck" :check="consumptionList" :value="value[7]" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            <Text :is-readonly="true" :is-group="true" :icontxt="'Rp.'" :label="label[8]" :index="8" @onChange="onChange" :place="place[8]" :value="value[8]" />
        </div>
    </div>
</template>