/*
## 需求：
  - 電影列表：
    - 透過 API 取得電影資料，並顯示在畫面上
      - 資料來源：https://developers.themoviedb.org
      - API key：`ba9e9eb1cba46fa2c366ab90f70a5dbe` 
    - 當搜尋關鍵字為空值時，顯示熱門電影列表（Movie List UI）
      - API 文件：https://developers.themoviedb.org/3/movies/get-popular-movies
      - 預設顯示前 20 筆資料
    - 尚未載入資料前，顯示 Loading 畫面（Loading UI）
    - 若載入資料失敗，則需顯示 Error 畫面（Error UI）
    - 若沒有任何資料時，則顯示 Empty 畫面（Empty UI）
  - 完成 `Movie` component
    - 需顯示 `電影名稱`、`電影年份` 及 `加入願望清單` 按鈕（愛心符號的按鈕）
    - 按下 `加入願望清單` 按鈕後，會將該電影加入願望清單，且愛心符號變為實心
    - 再次按下 `加入願望清單` 按鈕後，會將該電影從願望清單中移除，且愛心符號會變為空心
    - 在網頁重新整理後，願望清單的內容仍須保留
  - 搜尋電影
    - API 文件：https://developers.themoviedb.org/3/search/search-movies
    - 可以在搜尋欄中輸入關鍵字查詢電影，同時將搜尋結果顯示在下方列表（Search Result UI）
    - 預設顯示前 20 筆搜尋結果
    - 沒有任何符合關鍵字的電影時，請顯示無搜尋結果畫面（Empty Search Result UI）
  - 願望清單
    - 點擊右上角的 `Wishlist` 按鈕可以打開願望清單
    - 清單中會顯示所有已加入願望清單的電影
    - 點擊任一電影的 `加入願望清單` 按鈕，即可將該電影從願望清單中移除
## 加分項目
  - 實作 Lazy load
    - 完成 `載入更多` 按鈕（Load More Button UI）
      - 當熱門電影或搜尋結果超過 20 筆資料時，請顯示 `載入更多` 按鈕在電影列表或搜尋結果的最下方
      - 點擊按鈕後會載入後 20 筆資料
      - 載入後續資料期間，按鈕須顯示為 Loading 狀態
      - 若所有資料皆已顯示完畢，此按鈕隨即消失
    - 完成 `回到頂部` 按鈕（GO to Top Button UI）
      - 按下按鈕時會向上捲動至熱門電影列表或搜尋結果列表的頂部
  - 重構 components
----------------
## Requirements:
  - Movie List
    - Render movie data
      - Data source: https://developers.themoviedb.org
      - API key：`ba9e9eb1cba46fa2c366ab90f70a5dbe` 
    - Show popular movies as default (without search keywords)
      - API document：https://developers.themoviedb.org/3/movies/get-popular-movies
      - Show top 20 records
    - Show loading UI before retrieving data from API
    - Show error UI if failed to retrieve data
    - Show empty UI if there isn't any data in the list
  - Complete the "Movie" component
    - Show "Title", "Production Year" and "Add to Wishlist" button (a heart icon button)
    - When user clicked on the heart icon button, the movie will be added to user's wishlist and the heart icon will become solid
    - If user clicked on a solid heart icon button, the movie will be removed from the wishlist
    - The movies in the wishlist will remain after user refreshed the page
  - Search movie
    - API document：https://developers.themoviedb.org/3/search/search-movies
    - User can search movies by entering keywords in the input field, the result will replace the original data in the movie list
    - Show top 20 records
    - Show empty result UI if there is no mated result
  - Wishlist
    - Clicking the "Wishlist" button on the top-right will open the wishlist modal
    - The list will display all movies that was added to the wishlist by the user
    - Clicking on the solid heart icon button on the movie will remove the corresponding movie from the wishlist
## Bonus
  - Lazy load
    - Implement "Load More" button
      - When Popular Movies or search results has more than 20 records, please show the “Load More” button at the bottom of the movie list or search result
      - Load 20 records after the Load More button is clicked
      - While loading the records, show Load More button in Loading state
      - If all records are fully displayed, the Load More button will disappear
    - Implement "Back to Top" button
      - Page will automatically scroll to top of the Popular Movies list or search result list after clicking the button
  - Refactor components
*/
import { MoviePage } from './component/MoviePage';
const App = () => {
  return (
    <MoviePage />
  );
};

export default App;
