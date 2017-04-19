var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog BG1倉儲: https://github.com/40423226/2017springcd_bg1 40423219倉儲: https://github.com/40423219/2017springcd_hw 40423219投影片: https://40423219.github.io/2017springcd_hw/#/","title":"About"},{"url":"./midterm.html","tags":"HW","text":"40423219 MIDTERM (二) 四連桿機構協同 Trace Point 查驗 midterm4 from 40423219 on Vimeo . window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"../data/midterm4.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 4 倍 ratio = 4 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() (三) Fourbar Walker OnShape 零件協同繪圖與組立查驗","title":"MIDTERM"},{"url":"./week-6.html","tags":"HW","text":"40423219 Four bar work Simulation OnShape assembly fourbar assembly OnShape from 40423219 on Vimeo . V-rep simulation fourbar assembly OnShape from 40423219 on Vimeo .","title":"week 6"},{"url":"./week-5.html","tags":"HW","text":"40423219 One Link Spin Simulation 使用Solvespace轉檔 點左上角File>Export Triangle Mesh>轉成.stl檔案，即可用Vrep開啟。 V-rep simulation vrep_spin from 40423219 on Vimeo .","title":"week 5"},{"url":"./week-4.html","tags":"HW","text":"40423219 One Link Spin Solvespace One Link Spin: SolveSpace 單桿機構","title":"week 4"},{"url":"./week-3.html","tags":"HW","text":"40423219 Threebar link butten & Fossil setting Fourbar Link_1: SolveSpace Onshape 尺寸 Link_2: SolveSpace Onshape 尺寸 Link_3: SolveSpace Onshape 尺寸 Assembly: SolveSpace Onshape Fossil 1. 更改Start.bat設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_hw.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit 2. 在tmp裏的fossil_repo目錄執行指令 fossil init 2017springcd_hw.fpssil 3. 查詢IP ipconfig /all 4. 確認是否有用Poxy, 若有則需要將自己的IP設為例外 5. 使用瀏覽器輸入網址 https:// 電腦IPv4的IP","title":"week 3"},{"url":"./week-2.html","tags":"HW","text":"40423219 Three bar assembly 第一桿 第一桿 from 40423219 on Vimeo . 第二桿 第二桿 from 40423219 on Vimeo . 第三桿 第三桿 from 40423219 on Vimeo . 組合 組合 from 40423219 on Vimeo . solvespace真的很容易過度約束，光是2D的點線面就很容易，更何況是3D組合圖，但經過不斷的練習，也比較熟練使用了。","title":"week 2"},{"url":"./week-1.html","tags":"HW","text":"40423219 How to launch leo 如何啟動Leo from 40423219 on Vimeo . 這次點start後leo不會自動跳出來，問了老師之後才知道要自己用ScitE來打開它。","title":"week 1"}]};