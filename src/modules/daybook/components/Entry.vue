<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({name: 'entry', params: {id:10} })">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">julio</span>
            <span class="mx-2 fw-light">2022</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, 
            consequuntur atque ad neque quae veritatis perspiciatis, 
            cumque possimus itaque quaerat odio 
            nulla saepe cum dolorem ex recusandae mollitia dolores repellat?
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{ // solo con sass se puede hacer
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
}

.entry-description{
    font-size: 12px;
}
</style>