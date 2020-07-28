import { useRef, useEffect } from 'react';

export const useSimpleForm = () => {
    const refForm = useRef(null);

    useEffect(() => {
        if (refForm.current !== null) {
            const mapDOM = (element, json) => {
                var treeObject = {};

                function treeHTML(element, object) {
                    switch (element.nodeName) {
                        case 'INPUT':
                            /* TODO: Resolver type=file com e sem multiplos */

                            // eslint-disable-next-line no-case-declarations
                            const type = element.type.toLowerCase();

                            if (
                                ['submit', 'button', 'reset', 'image'].includes(
                                    type
                                )
                            )
                                break;

                            if (type === 'checkbox') {
                                // eslint-disable-next-line no-case-declarations
                                const name = element.getAttribute('name');
                                object[name] = object[name] ?? [];
                                if (element.checked) {
                                    object[name].push(element.value);
                                }
                            } else if (type === 'file') {
                                console.log('tratar file');
                            } else {
                                object[element.getAttribute('name')] =
                                    element.value;
                            }
                            break;
                        case 'SELECT':
                            // eslint-disable-next-line no-case-declarations
                            const name = element.getAttribute('name');
                            // eslint-disable-next-line no-case-declarations
                            const isMultiple = element.hasAttribute('multiple');

                            if (isMultiple) {
                                object[name] = [];
                                for (const option of element.querySelectorAll(
                                    'option:checked'
                                )) {
                                    object[name].push(option.value);
                                }
                            } else {
                                object[name] = element.value;
                            }
                            break;
                        case 'TEXTAREA':
                            object[element.getAttribute('name')] =
                                element.value;
                            break;
                        default:
                            break;
                    }

                    const nodeList = element.childNodes;
                    if (nodeList != null) {
                        if (nodeList.length) {
                            for (var i = 0; i < nodeList.length; i++) {
                                if (
                                    nodeList[i].nodeType ===
                                    nodeList[i].ELEMENT_NODE
                                ) {
                                    if (element.nodeName === 'FIELDSET') {
                                        const name = element.getAttribute(
                                            'name'
                                        );
                                        if (!object[name]) {
                                            object[name] = {};
                                        }
                                        treeHTML(nodeList[i], object[name]);
                                    } else {
                                        treeHTML(nodeList[i], object);
                                    }
                                }
                            }
                        }
                    }
                }
                treeHTML(element, treeObject);

                return json ? JSON.stringify(treeObject) : treeObject;
            };
            refForm.current.getJson = () => mapDOM(refForm.current);
        }
    });

    return [refForm];
};
