const MODAL_ROOT_ID = 'modal-backdrop';
const gotoTrainingModalTemplate = `
    <div class="modal-goto-training" onclick="e.stopPropagation()">
        <span class="title">
            화이팅!!♥♥♥
        </span>
        <span class="subtitle">
            당신의 꿈을 응원합니다!
        </span>
    
        <img src="assets/svg/ic_lion.svg" width="433" height="337" alt="사자"/>
    
        <div class="modal-goto-training-button-layout">
            <button 
                class="button-primary button-effect-drop-shadow" 
                type="button" 
                onclick="openOrCloseIfOpened('GoToTraining')"
            >
                <span>종료하고 진짜 훈련하러 가기!</span>
            </button>
        </div>
    </div>
`
const modalStorage = {
    'GoToTraining': gotoTrainingModalTemplate
}

const openOrCloseIfOpened = (modalName) => {
    console.log(modalName in modalStorage)
    if (modalName in modalStorage) {
        const modalTemplate = modalStorage[modalName];
        renderModal(modalTemplate);
    }
}

const closeIfOpenedAnyModal = (modalBackdropElement, modalPanels) => {
    if (modalBackdropElement.style.display === 'flex') {
        releaseModalPanel(modalPanels);
        modalBackdropElement.style.display = "none";
    }
}

const closeIfOpenedAnyModalFound = () => {
    const modalBackdropElement = document.getElementById(MODAL_ROOT_ID);
    if (!modalBackdropElement) {
        return;
    }
    const modalPanels = modalBackdropElement.getElementsByClassName('modal-panel');
    if (modalBackdropElement.style.display === 'flex') {
        closeIfOpenedAnyModal(modalBackdropElement, modalPanels);
    }
}

const renderModal = (modalTemplate) => {
    const modalBackdropElement = document.getElementById(MODAL_ROOT_ID);
    if (!modalBackdropElement) {
        return;
    }
    const modalPanels = modalBackdropElement.getElementsByClassName('modal-panel');
    if (modalPanels.length === 0) {
        return;
    }
    if (modalBackdropElement.style.display === 'flex') {
        closeIfOpenedAnyModal(modalBackdropElement, modalPanels)
        return;
    }

    releaseModalPanel(modalPanels)
    const modalPanel = modalPanels[0];

    const modalPanelChildElement = createModalPanelElement(modalTemplate);
    modalPanel.appendChild(modalPanelChildElement);
    modalBackdropElement.style.display = 'flex';
    modalBackdropElement.style.height = `${document.getElementsByTagName('body')[0].clientHeight}px`;
}

const createModalPanelElement = (modalTemplate) => {
    const div = document.createElement('div');
    div.innerHTML = modalTemplate;

    return div;
}

const releaseModalPanel = (modalPanels) => {
    const modalPanel = modalPanels[0];
    if (modalPanel.children.length > 0) {
        for (const modalPanelChild of modalPanel.children) {
            modalPanel.removeChild(modalPanelChild);
        }
    }
}