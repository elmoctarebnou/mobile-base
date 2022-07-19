#!/usr/bin/env bash
<<comment
    Util shell script for creating components.
    ARG1: Component folder type(c for components or s for screen)
    ARG2: ComponentName
comment

ARG1=$1
ARG2=$2
FOLDER=''


create_folder(){

    COMPONENT_NAME=${ARG2}

    mkdir ./src/${FOLDER}/${COMPONENT_NAME,}

    cat > ./src/${FOLDER}/${COMPONENT_NAME,}/${COMPONENT_NAME}.js <<EOM
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import getStyles from './${COMPONENT_NAME}.styles.js';

const ${COMPONENT_NAME} = (props) => {

    const styles = StyleSheet.create(getStyles());

    return (
        <View style={styles.screen}>
            <Text>
                ${COMPONENT_NAME}
            </Text>
        </View>
    )
};
export default ${COMPONENT_NAME};
EOM

    cat > ./src/${FOLDER}/${COMPONENT_NAME,}/${COMPONENT_NAME}.styles.js <<EOM

import { white } from "../../components/constants/colors";

export default function getStyles() {
    return {
        row: {
            flexDirection: 'row'
        },
        column: {
            flexDirection: 'column'
        },
        screen: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    };
};
EOM

    echo '------------'
    echo Folder ${ARG2} added! PATH = ./src/${FOLDER}/${COMPONENT_NAME,}
    echo '------------'
}


if [ ${ARG1} = 'c' ]
    then
        FOLDER='components'
        create_folder
    fi
if [ ${ARG1} = 's' ]
    then
        FOLDER='screens'
        create_folder
    fi