export interface Item {
    id: string;
    itemName: string;
    itemLevel: number;
    quality?: number;
    rarity: 'Normal' | 'Magic' | 'Rare' | 'Unique';
    attributes: (VariableAffix | FixedAffix | HybridAffix)[];
}

interface BaseAffix {
    type: 'prefix' | 'suffix';
    text: string;
    tier: number;
}

interface VariableAffix extends BaseAffix {
    min: number;
    max: number; 
    value: number;
}

interface FixedAffix extends BaseAffix {
    value: number;
}


interface HybridAffix {
    type: 'prefix hybrid' | 'suffix hybrid';
    min: [number, number];
    max: [number, number];
    value: [number, number];
    text: string;
    tier: number;
}

// Helper function to create a new item with default values
export const createDefaultItem = (name: string): Item => ({
    id: crypto.randomUUID(),
    itemName: name,
    itemLevel: 79,
    quality: 20,
    rarity: 'Rare',
    attributes: [
        {
            type: 'prefix',
            min: 60,
            max: 69,
            value: 65,
            text: '+CURRENT to maximum life',
            tier: 5
        },
        {
            type: 'prefix',
            value: 30,
            text: '+CURRENT% increased movement speed',
            tier: 5
        },
        {
            type: 'prefix hybrid',
            min: [21, 25],
            max: [26, 40], 
            value: [24, 28],
            text: '+CURRENT% increased energy shield, +CURRENT to stun threshold',
            tier: 3
        },
        {
            type: 'suffix',
            min: 25,
            max: 27,
            value: 27,
            text: '+CURRENT to intelligence',
            tier: 6
        },
        {
            type: 'suffix',
            min: 20,
            max: 23,
            value: 23,
            text: '+CURRENT to chaos resistance',
            tier: 5
        },
        {
            type: 'suffix hybrid',
            min: [15, 10],
            max: [20, 15],
            value: [18, 12],
            text: '+CURRENT% to fire resistance, +CURRENT% to cold resistance',
            tier: 4
        }
    ]
});
