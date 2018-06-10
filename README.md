# 說明

此處展示如何用 Vuex namespaced modules 透過 axios 抓取資料並加以管理。 

## 要點

1. 使用 store/factories/resourceFactory.js 產生 Vuex namespaced module 。見 store/orders.js 及 store/users 。
2. Vuex module 中 mutations 專注於寫入 state，而 actions 專注於與 API 互動及呼叫寫入程序。

# 安裝
`yarn`

# 啟動

啟動假 API server

`yarn json-server`

啟動開發模式

`yarn serve`

測試網址

[http://localhost:8080/]()
