export type Conviction = "high" | "medium" | "low";
export type TakeDomain = "startup-tactics" | "tech-trends" | "geography" | "hiring" | "market-timing" | "founder-behavior" | "ai" | "other";
export type OutcomeVerdict = "correct" | "partially correct" | "incorrect" | "unresolvable";
export interface EvidenceItem {
    url: string;
    summary: string;
}
export interface Outcome {
    outcome: OutcomeVerdict;
    evidence: EvidenceItem[];
    verdict: string;
    resolved_at: string;
}
export interface Take {
    /**
     * Display identifier of the form `[title-slug]-claim-[claim_index]`
     * (e.g. `cities-and-ambition-claim-1`), where `title-slug` is the slugified
     * essay frontmatter title. Human-facing / external reference only — NOT a
     * reliable join key, because the `-claim-N` index depends on extraction
     * order. To match curated outcomes, join on `essay_slug` instead.
     */
    id: string;
    /**
     * Corpus filename stem (e.g. `cities` from `cities.md`). The join key for
     * matching curated outcomes: `take.essay_slug === outcome.essay_slug`.
     */
    essay_slug: string;
    /** 1-indexed position of this take within its essay, in document order. */
    claim_index: number;
    source_page: string;
    claim_text: string;
    claim_date: string;
    conviction: Conviction;
    domain: TakeDomain;
    falsifiable_form: string;
    extracted_at: string;
    logged_explicitly: boolean;
    outcome: Outcome | null;
}
export interface DomainProfile {
    domain: TakeDomain;
    hit_rate: number;
    n: number;
}
export interface HighlightTake {
    take_id: string;
    claim_text: string;
    verdict_summary: string;
}
export interface Profile {
    user: string;
    corpus_size: number;
    total_takes: number;
    resolved_takes: number;
    overall_hit_rate: number;
    by_domain: DomainProfile[];
    patterns: string[];
    highlight_takes: HighlightTake[];
}
export interface BrainPage {
    title: string;
    url: string;
    relevance: string;
}
export interface FreshSignalItem {
    source: string;
    title: string;
    url: string;
    date: string;
    summary: string;
}
export interface CalibrationAdjustment {
    applicable_pattern: string;
    adjustment_text: string;
}
export interface AdviceResult {
    question: string;
    relevant_pages: BrainPage[];
    calibration_adjustment: CalibrationAdjustment;
    fresh_signal: FreshSignalItem[];
    synthesized_take: string;
}
export interface ContradictionClaim {
    text: string;
    source_page: string;
    date: string;
}
export interface ContradictionPair {
    topic: string;
    claim_a: ContradictionClaim;
    claim_b: ContradictionClaim;
    contradiction_summary: string;
}
export interface ExtractTakesInput {
    brain_page_content: string;
    brain_page_path: string;
    brain_page_date: string;
}
export interface ExtractTakesOutput {
    takes: Take[];
}
export interface FindContradictionsInput {
    takes: Take[];
}
export interface FindContradictionsOutput {
    contradictions: ContradictionPair[];
}
export interface ResolveOutcomesInput {
    take: Take;
}
export interface ResolveOutcomesOutput {
    /**
     * The curated outcome for this take, or `null` when no curated outcome
     * exists in data/outcomes.json for it. `null` is NOT the same as the
     * `unresolvable` verdict: `unresolvable` is a graded result (the take was
     * curated but could not be settled), whereas `null` means the take was
     * never curated at all.
     */
    outcome: Outcome | null;
}
export interface HindsightProfileInput {
    resolved_takes: Take[];
}
export interface HindsightProfileOutput {
    profile: Profile;
}
export interface CalibratedAdviseInput {
    question: string;
    profile: Profile;
    force_pattern?: string;
}
export interface CalibratedAdviseOutput {
    advice: AdviceResult;
}
//# sourceMappingURL=contracts.d.ts.map