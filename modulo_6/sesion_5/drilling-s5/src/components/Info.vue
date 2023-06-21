<template lang="">
    <div>
        <div class="mb-3">
            <label for="" class="form-label">Películas</label>
            <select @change='onChange($event)' class="form-select form-select-lg" name="" id="">
                <option selected>Selecciona una película</option>
                <option v-for="(data, index) in data_api.data" :key="index" :value="data.title">{{data.title}}</option>
            </select>
        </div>
        <div v-if="valueData.title" class="card text-start" >
            <img class="card-img-top mt-1" :src="valueData.poster" alt="Title" style="object-fit: contain; height:30rem">
            <div class="card-body">
                    <h3 class="card-title">Titulo Original:  {{valueData.hepburn}}</h3>
                <h4 class="card-title">Titulo Inglés:{{valueData.title}}</h4>
                <p class="card-text">{{valueData.sinapsis}}</p>
                    director: {{valueData.director}}
                    Duracion: {{valueData.runtimeMinutes}}
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'info-comp',
    data() {
        return {
            selectedOption:'',
            valueData:{},
        }
    },
    methods: {
        onChange(event){
            const selectedValue=event.target.value
            this.selectedOption=selectedValue
            // console.log(this.selectedOption)
            console.log(this.data_api.data)
            this.valueData=this.data_api.data[this.selectedOption.toLowerCase()]
            console.log(this.valueData)
            },
            //TODO:la variable valueData deberia llenarse con el objeto que se quiere buscar.
    },
    props:{
        data_api:{
            type:Object,
            required:true
        }
    }

}
</script>
<style lang="">
    
</style>