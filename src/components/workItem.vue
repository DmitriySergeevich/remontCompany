<template>
    <div class="workItem">
        {{todo.title}}
    </div>
</template>

<script>
export default {
    props:{
        todo:Object
    }
}
</script>