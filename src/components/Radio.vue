<script setup>
const props = defineProps({
    index: Number,
    label: String,
    isRequired: Boolean,
    isDisabled: Boolean,
    radio: Array,
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
        <div v-for="r in props.radio" class="radiocheck">
            <input @click="handleChange" :name="props.label" type="radio" :value="r.key" :checked="props.value === r.key ? true : false" :disabled="props.isDisabled ? true : false" />
            <label v-text="r.value" />
        </div>
    </div>
</template>