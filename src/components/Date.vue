<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
const props = defineProps({
    index: Number,
    label: String,
    place: String,
    isRequired: Boolean,
    isDisabled: Boolean,
    isGroup: Boolean,
    iconbic: { type: String, default: '' },
    icontxt: { type: String, default: '' },
    value: String
})
const emit = defineEmits(['onChange'])
const handleChange = (e) => {
    emit('onChange', [props.index,e])
}

function getdate() {
    if (props.value === '') {
        let d = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
        handleChange(d)
        return d
    } else {
        return props.value
    }
}
let date = getdate()
const format = (date) => {
    let day = ('00' + date.getDate())
    day = day.substring(day.length-2,day.length)
    const month = ['','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember']
    let mon = month[date.getMonth() + 1]
    let yea = date.getFullYear()
    
    return `${day} ${mon} ${yea}`
}
</script>

<template>
    <div class="form-group-datetime">
        <label>{{ props.label }}</label>
        <span v-if="props.isRequired">*</span>
        <div class="content-fill">        
            <i v-if="props.isGroup && props.iconbic.length > 0" :class="props.iconbic" />
            <i v-if="props.isGroup && props.icontxt.length > 0">{{ props.icontxt }}</i>
            <VueDatePicker @update:model-value="handleChange" :format="format" :disabled="props.isDisabled ? true : false" class="vuedatetime" v-model="date" :enable-time-picker="false" />
        </div>
    </div>
</template>