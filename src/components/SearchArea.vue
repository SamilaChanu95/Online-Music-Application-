<template>
    <div class="form-group">
            <label for="inputEmail" class="col-sm-2 col-form-label">Search Music</label>
            <div class="col-sm-10">
                <input type="text" class="form-control"  placeholder="Type here" @input="keyPressed">
            </div>
    </div>
</template>

<script>
    import axios from 'axios';

    var accessToken ='BQDe0gdqvdbHfY8Nsz3sGE09014INlt2A5lKrqex0lZB2_-ycsXIX060Dtons0cpsTROb-vIKGZqAhXD44O1UV8yen88uGwGqqV3_tYIRFOZCPK643RmTZnw81xJ1GOrVm2BV6ftbWgtiDI9YB6rYzzaZKBwuKydIu38edB3-Ja8B5mQVTs';
    var headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
    };

    export default
    {
        props:['resList'], 

        //initialize the newSet data array
        data(){

            return {
                newSet:[],
            }
        },

        //in the vue we use methods for code the functions
        methods:{

            //function for the when Search the input data
            keyPressed:function(event){
                var key = event.target.value;
                
                    axios.get("https://api.spotify.com/v1/search?q="+key+"&type=track",{ headers })
                        .then(response=>{

                            //store the data to newSet array
                            this.newSet = response.data.tracks.items;
                            console.log(this.newSet)
                        })
                        .catch(e=>{
                            this.error.push(e)
                        })
                
                //vuejs method for update the data set by new data filled into newDataset array
                this.$emit('newDataset',this.newSet);
                
            }
        }
    }
</script>

<style>
     
</style> 