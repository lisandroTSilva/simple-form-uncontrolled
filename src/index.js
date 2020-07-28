import { useRef, useEffect } from 'react';

export const useSimpleForm = () => {
    const refForm = useRef(null);

    useEffect(() => {
        if (refForm.current !== null) {
            const formClone = refForm.current;

            const mapDOM = (element, json) => {
                var treeObject = {};

                function treeHTML(element, object) {
                    const type = element.getAttribute('type')?.toLowerCase();
                    if (
                        (element.nodeName === 'INPUT' &&
                            !['submit', 'button', 'reset'].includes(type)) ||
                        element.nodeName === 'SELECT' ||
                        element.nodeName === 'TEXTAREA'
                    ) {
                        object[element.getAttribute('name')] = element.value;
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

            // refForm.current = Form
            refForm.current.getJson = () => mapDOM(formClone);
        }
    });

    return [refForm];
};
