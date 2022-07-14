<template>
  <div>

    <div>
        <h5><router-link to="/detail">{{blogData[0].title}}</router-link></h5>
        <p>{{blogData[0].date}}</p>
    </div>

    <div>
        <h5>{{blogData[1].title}}</h5>
        <p>{{blogData[1].date}}</p>
    </div>

    <div>
        <h5>{{blogData[2].title}}</h5>
        <p>{{blogData[2].date}}</p>
    </div>

  </div>
</template>

<script>
export default {
    name: 'List_te',
    props:{
        blogData: Array
    }
}
</script>

<style>

</style>