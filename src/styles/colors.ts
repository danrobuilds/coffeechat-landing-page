// Define your color palette
export const COLORS = {
    // Core colors - primary interaction elements
    primary: "#6BA5C2", // New primary blue (replacing teal)
    secondary: "#93C5FD", // Light blue accent

    // Text colors
    textDark: "#374151", // Main text color (dark gray)
    textLight: "#6B7280", // Secondary text (medium gray)
    textMuted: "#9CA3AF", // Muted text (lighter gray)

    // UI background colors
    background: "#FFFFFF", // Pure white background
    card: "#F9FAFB", // Very light gray for cards
    cardVariant1: "#F5F8FB", // Subtle blue tint
    cardVariant2: "#FAF9F7", // Subtle cream tint
    cardVariant3: "#F8FAFC", // Subtle blue-gray tint

    // UI element colors
    border: "#E5E7EB", // Light gray for borders
    divider: "#E5E7EB", // Same as border for consistency
    input: "#F9FAFB", // Light gray for input backgrounds

    // Status colors
    success: "#10B981", // Green for success
    error: "#EF4444", // Red for errors
    warning: "#F59E0B", // Orange for warnings
    info: "#3B82F6", // Blue for info

    // Button colors
    buttonPrimary: "#6BA5C2", // Same as primary
    buttonSecondary: "#F0F7FF", // Very light blue for secondary buttons

    // Legacy colors (kept for compatibility)
    accent: "#FFF8F3", // Light cream accent (legacy)
    teal: "#5F9E97", // Original teal (for legacy use only)

    // Literal colors
    white: "#FFFFFF", // Pure white
    black: "#000000", // Pure black
};

// Helper function for shadows
export const getShadow = (elevation = 2) => {
    return {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: elevation,
        },
        shadowOpacity: 0.1,
        shadowRadius: elevation * 1.5,
        elevation: elevation,
    };
};

// For consistency, add helper for subtle card shadows
export const getCardShadow = () => {
    return {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    };
}; 