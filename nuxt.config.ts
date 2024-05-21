// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 개발 환경에서만 NUXT devtools 활성화
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  // NUXT module name 기입
  modules: ['@nuxtjs/eslint-module', '@pinia/nuxt', '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {}
    }
  },
  // 전역으로 관리하고 싶은 css or scss 파일 등록시 해당 속성에 기입
  css: ['@/assets/scss/main.scss'],
  // 피니아 관련 설정
  pinia: {
    storesDirs: ['./stores/**']
  },
  // 앱 관련 설정시 해당 속성에 기입...metaTag 등
  app: {
    baseURL: '/',
    head: {
      title: 'title'
    }
  },

  // 환경 변수 사용시 해당 속성에 기입
  runtimeConfig: {
    public: {}
  },

  // VITE 관련 설정 적용시 해당 속성에 기입
  vite: {
    esbuild: {
      // 배포 환경에서는 console,debugger 키워드를 누락시키도록 설정
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
    }
  }
});
