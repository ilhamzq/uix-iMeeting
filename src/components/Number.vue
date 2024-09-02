<script setup>
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
    e.target.value = e.target.value.replace(/[^0-9]/g, '')
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
            <input @input="handleChange" type="number" :value="props.value" :placeholder="props.place" :disabled="props.isDisabled ? true : false" />
        </div>
    </div>
</template>