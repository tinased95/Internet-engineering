<<template>
<div class="button" :style="{background:color}">
      <slot />
</div>
      </template>
      <style scoped>
      .button{
          padding: 5px;
          color:white;
          display: inline-block;
          cursor: pointer;
          border-radius: 5px;
      }
      </style>
<script>
export default{
    props:{
        color:{
            type:String,
            default: 'violet'
        }
    }
}
</script>

