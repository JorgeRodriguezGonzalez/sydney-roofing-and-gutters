import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import SEOHead from './SEOHead';
import { PageSchemaConfig } from '@/config/schemaConfig';

interface AutoSEOHeadProps {
  /**
   * Configuración personalizada que sobrescribe valores de schemaConfig
   */
  overrides?: Partial<PageSchemaConfig>;
}

/**
 * Componente que automáticamente carga metadata desde schemaConfig.ts
 * basado en la ruta actual. Permite sobrescribir valores específicos.
 * 
 * Uso:
 * ```tsx
 * // Usar configuración automática desde schemaConfig
 * <AutoSEOHead />
 * 
 * // Sobrescribir algunos valores
 * <AutoSEOHead overrides={{ title: "Custom Title" }} />
 * ```
 */
const AutoSEOHead = ({ overrides }: AutoSEOHeadProps) => {
  const { seoProps } = useSchemaMarkup(overrides);

  if (!seoProps) {
    return null;
  }

  return <SEOHead {...seoProps} />;
};

export default AutoSEOHead;


