<script setup>
const props = defineProps({
    index: Number,
    label: String,
    place: String,
    isRequired: Boolean,
    isDisabled: Boolean,
    option: Array,
    isGroup: Boolean,
    iconbic: { type: String, default: '' },
    icontxt: { type: String, default: '' },
    value: String
})
const emit = defineEmits(['onChange'])
const handleChange = (e) => {
    emit('onChange', [props.index,e.target.value])    
}
</script>

<template>
    <div class="form-group">
        <label>{{ props.label }}</label>
        <span v-if="props.isRequired">*</span>
        <div>
            <i v-if="props.isGroup && props.iconbic.length > 0" :class="props.iconbic" />
            <i v-if="props.isGroup && props.icontxt.length > 0">{{ props.icontxt }}</i>
            <select @change="handleChange" :class="[props.value === '' ? '!text-[#aaa]' : '!text-[#000]']" :value="props.value" :disabled="props.isDisabled ? true : false">
                <option value="" disabled>{{ props.place }}</option>
                <option v-for="o in props.option" :value="o.id">{{ o.name }}</option>
            </select>
        </div>
    </div>
</template>