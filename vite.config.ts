import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/shortcuts_client/',
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      
      },
    }),
  ],
})



//  https://nourelshorfa.github.io/shortcuts_client/#/dashboard   // mohammed will make it
//  https://nourelshorfa.github.io/shortcuts_client/#/signin    //   Mohammed make this he should deploy it on the code on github
//  https://nourelshorfa.github.io/shortcuts_client/   // Nour Done 
//  https://nourelshorfa.github.io/shortcuts_client/#/dashboard/itemmanagement   //  Nour done
//  https://nourelshorfa.github.io/shortcuts_client/#/signup    //  Nour done
//  https://nourelshorfa.github.io/shortcuts_client/#/otp    //  Nour done

