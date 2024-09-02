<script setup>
const props = defineProps({
    index: Number,
    label: String,
    isRequired: Boolean,
    isDisabled: Boolean,
    check: Array,
    value: Array
})
const emit = defineEmits(['onChange'])
const handleCheck = (e,id) => {
    if (e.target.checked) {
        emit('onCheck', [props.index,id,e.target.value])    
    } else {
        emit('onCheck', [props.index,id,''])
    }
}
</script>

<template>
    <div class="form-group">
        <label>{{ props.label }}</label>
        <span v-if="props.isRequired">*</span>
        <div v-for="(c,index) in props.check" class="radiocheck">
            <input @click="e => handleCheck(e,index)" type="checkbox" :value="c.id" :checked="props.value[index] === c.id ? true : false" :disabled="props.isDisabled ? true : false" />
            <label v-text="c.name" />
        </div>
    </div>
</template>