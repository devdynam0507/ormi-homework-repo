
const injectKakaoMapScript = () => {
    const kakaoMapAppKey = "your app key";
    const body = document.getElementsByTagName("body")[0];
    const kakaoMapInitScript = document.createElement('script');

    kakaoMapInitScript.type = 'text/javascript';
    body.appendChild(kakaoMapInitScript);

    kakaoMapInitScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapAppKey}`;
}

const retryableKakaoMapInitializer = (mapDomId) => {
    const retryableScript = `
        let loaded = false;

        const id = setInterval(() => {
            try {
                const container = document.getElementById(\'${mapDomId}\');
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };
    
                const map = new kakao.maps.Map(container, options);
                loaded = true
            } catch (e) {
                console.error(e);
            }
    
            if (loaded) {
                clearInterval(id);
            }
        }, 500);
    `;
    const body = document.getElementsByTagName("body")[0];
    const retryableScriptElement = document.createElement('script');
    retryableScriptElement.type = 'text/javascript';
    retryableScriptElement.innerText = retryableScript;
    body.appendChild(retryableScriptElement)
}

document.addEventListener("DOMContentLoaded", ()=> {
    injectKakaoMapScript();
    retryableKakaoMapInitializer();
});