var tipuesearch = {"pages":[{"title":"About","text":"2016Fall 修課成員網誌","tags":"misc","url":"./pages/about/"},{"title":"git 指令應用","text":"2016-11-10_22-28-44 from 陳士正 on Vimeo .","tags":"Misc","url":"./git-zhi-ling-ying-yong.html"},{"title":"W10 Brython 繪圖範圍","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 100) ctx.lineTo(150, 200) ctx.lineTo(100, 200) ctx.lineTo(100, 100) # 畫右上左下的斜線 #ctx.moveTo(150, 100) #ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(10): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() 以下為程式碼 window.onload=function(){ brython(1); } from browser import document as doc import math 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") 以下可以利用 ctx 物件進行畫圖 先畫一條直線 ctx.beginPath() 設定線的寬度為 1 個單位 ctx.lineWidth = 1 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 100) ctx.lineTo(150, 200) ctx.lineTo(100, 200) ctx.lineTo(100, 100) 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(10): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","tags":"Cours","url":"./w10-brython-hui-tu-fan-wei.html"},{"title":"2016Fall 機械設計主題教學","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs)","tags":"Misc","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html"}]};