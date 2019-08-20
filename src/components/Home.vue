<template>
  <div class="container"> 
    <div> <!--if we use the div container then automatically that place in the middle-->
      <form class ="form-horizontal">
            <fieldset>
                <legend>Music</legend>
                <!--update the result by newDataset array-->
                <app-search :resList="results" @newDataset ="results = $event"></app-search>
            </fieldset>
      </form>
    </div>
    <div class="row">
        <div class="col-md-12">

            <!--pass the results into app-result component-->
            <app-result :resList="results"></app-result>
           

        </div>
    </div>
  </div>
  
</template>

<script>

  import SearchArea from './SearchArea.vue'
  import ResultArea from './ResultArea.vue'
  export default {
      data(){

        //initialize the results data array
        return {

            results:[]
        }
      },

      components:{
        
        'app-search':SearchArea,
        'app-result':ResultArea
      }
}

</script>

<style>

</style> 