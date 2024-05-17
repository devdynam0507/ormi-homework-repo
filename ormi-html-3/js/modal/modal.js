const MODAL_ROOT_ID = 'modal-backdrop';

const modalStorage = {
    'Modal': `
        <div class="modal-cat-panel">
            <img src="./assets/png/img_cat_face.png" class="img-cat-face" alt="고양이얼굴"/>
            <div class="heading">
                <h1>
                    Thank you!
                </h1>     
                <span class="subtitle">
                    Lorem Ipsum is simply dummy text of the printing industry. 
                </span>       
            </div>
            <div class="modal-cat-panel-button-wrapper">
                <button 
                    class="common-button"
                    type="button" 
                    onclick="openOrCloseIfOpened('Modal')"
                >
                    <span>OK! I Love HODU</span>
                </button>
            </div>    
        </div>
    `
}

const openOrCloseIfOpened = (modalName) => {
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
        console.log('modal backdrop element not found')
        return;
    }
    const modalPanels = modalBackdropElement.getElementsByClassName('modal-panel');
    if (modalPanels.length === 0) {
        console.log('modal panel not found')
        return;
    }
    if (modalBackdropElement.style.display === 'flex') {
        closeIfOpenedAnyModal(modalBackdropElement, modalPanels)
        console.log('backdrop display\'s flex')
        return;
    }

    releaseModalPanel(modalPanels)
    const modalPanel = modalPanels[0];

    modalPanel.innerHTML = modalTemplate;

    // const modalPanelChildElement = createModalPanelElement(modalTemplate);
    // modalPanel.appendChild(modalPanelChildElement);
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