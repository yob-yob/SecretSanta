<script>
  import { createClient } from '@supabase/supabase-js'
  const supabaseUrl = 'https://qridlqoyzmnkzatspgay.supabase.co'
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  let name = '';

  async function RegisterSanta () {
    const { data, error } = await supabase.from('santas').insert([{ codename: name }]);
    console.log(data, error)
  }
</script>

<div class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-6">Secret Santa Form</h1>
      <form>
          <div class="mb-4">
              <label for="secretSantaName" class="block text-gray-700 text-sm font-bold mb-2">Secret Santa Name</label>
              <input type="text" id="secretSantaName" name="secretSantaName" bind:value={name} class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500">
          </div>

          <button type="submit" on:click={RegisterSanta} class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600">
              Submit
          </button>
      </form>
  </div>
</div>